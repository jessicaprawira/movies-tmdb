# ====================
# 1. Build stage
# ====================
FROM node:18 AS builder

WORKDIR /app

# Salin file dependensi
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua source code
COPY . .

# Build Next.js project
RUN npm run build

# ====================
# 2. Run stage
# ====================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Salin hasil build dan produksi saja
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./  # jika kamu pakai file ini

# Jalankan server Next.js
EXPOSE 3000
CMD ["npm", "start"]