# -------- Stage 1: Build --------

FROM node:18-alpine AS builder
 
# Set working directory

WORKDIR /app
 
# Install dependencies

COPY package*.json ./

RUN npm install --legacy-peer-deps
 
# Copy all source files

COPY . .
 
# Build Next.js app (standalone)

RUN npm run build

RUN npm prune --production
 
# -------- Stage 2: Production --------

FROM node:18-alpine AS runner
 
WORKDIR /app

ENV NODE_ENV=production
 
# Copy standalone build contents (including server.js) to /app

COPY --from=builder /app/.next/standalone/. ./
 
# Copy static assets

COPY --from=builder /app/.next/static ./.next/static
 
# Copy public folder

COPY --from=builder /app/public ./public
 
# Run the server.js from the root of /app folder

CMD ["node", "server.js"]

 