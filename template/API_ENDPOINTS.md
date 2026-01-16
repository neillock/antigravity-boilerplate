# API Endpoint Authentication Reference

This document tracks all API endpoints and their authentication requirements.

## Endpoint Classification

| Endpoint | Method | Auth Required | Role Required | Rate Limited | Description |
|----------|--------|---------------|---------------|--------------|-------------|
| `/api/health` | GET | ❌ No | None | ❌ | Health check |
| `/api/user/profile` | GET | ✅ Yes | `user` | ✅ 100/min | Get user profile |
| `/api/admin/users` | GET | ✅ Yes | `admin` | ✅ 30/min | List all users |
| `/api/admin/users/:id` | DELETE | ✅ Yes | `admin` | ✅ 10/min | Delete a user |

## Authentication Responses

| Status Code | Meaning | When to Use |
|-------------|---------|-------------|
| `401 Unauthorized` | Not authenticated | User has no valid session |
| `403 Forbidden` | Not authorized | User authenticated but lacks required role |
| `429 Too Many Requests` | Rate limited | Too many requests in time window |

## Implementation Notes

1. **Always validate on the server**: Never trust client-side auth state.
2. **Check roles in database**: Do not rely solely on JWT claims for role checks.
3. **Document all endpoints**: Update this table when adding new API routes.
