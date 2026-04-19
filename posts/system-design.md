# System Design: Building Scalable Architectures

Designing systems that can handle millions of users requires careful planning and architectural decisions. Master the principles of scalable system design.

## Microservices vs Monoliths

### When to Choose Microservices

- Complex domains with multiple teams
- Independent scaling requirements
- Technology diversity needs
- Fault isolation requirements

### Monolithic Advantages

- Simpler development and deployment
- Easier debugging and testing
- Better performance for small teams

## Database Design

### SQL vs NoSQL

```sql
-- PostgreSQL: ACID compliance, complex queries
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- MongoDB: Flexible schemas, horizontal scaling
db.users.insertOne({
  email: "user@example.com",
  profile: {
    name: "John Doe",
    preferences: {}
  },
  createdAt: new Date()
});
```

## Caching Strategies

### Redis for Session Management

```javascript
const redis = require('redis');
const client = redis.createClient();

client.set('user:123', JSON.stringify(userData), 'EX', 3600);
```

### CDN for Static Assets

Distribute content globally using Cloudflare or AWS CloudFront.

## Load Balancing

### Nginx Configuration

```nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
    }
}
```

## Monitoring and Observability

Implement comprehensive logging, metrics, and tracing.

---

*"Architecture is the art of delaying decisions until the last possible moment."* - Martin Fowler