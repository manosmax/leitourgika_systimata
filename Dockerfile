FROM node:24-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci --verbose

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS runner
ENV NEXT_TELEMETRY_DISABLED=1

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

RUN groupadd --gid 1001 nodejs && useradd --uid 1001 -g nodejs nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

RUN mkdir -p /app/.next && chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000
CMD ["-deploy"]

FROM base AS dev
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["-dev"]