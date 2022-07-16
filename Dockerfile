# Install dependencies only when needed
FROM node:14.19.3-bullseye AS deps
WORKDIR /app
COPY package.json .yarnrc.yml yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14.19.3-bullseye AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
# RUN ls -lR ./node_modules
# RUN ls -lR Ipackages ./
RUN yarn workspace @devlaunchers/platform_website install
RUN yarn workspace @devlaunchers/platform_website build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=deps . .
COPY --from=builder . .
# COPY --from=deps /app/package.json ./
# COPY --from=deps /app/node_modules ./node_modules
# COPY --from=builder /app/apps/platform__website/next.config.js ./apps/platform__website/
# COPY --from=builder /app/apps/platform__website/public ./apps/platform__website/public
# COPY --from=builder --chown=nextjs:nodejs /app/apps/platform__website/.next ./apps/platform__website/.next
# COPY --from=builder /app/apps/platform__website/node_modules ./apps/platform__website/node_modules
# COPY --from=builder /app/apps/platform__website/package.json ./apps/platform__website/package.json
USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "workspace", "@devlaunchers/platform_website", "start"]