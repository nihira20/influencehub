
# backend/app/routes/auth.py
# ============================================
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    success: bool
    message: str
    user: dict

@router.post("/login", response_model=LoginResponse)
async def login(credentials: LoginRequest):
    # Mock authentication - replace with real authentication
    if credentials.username == "admin" and credentials.password == "admin123":
        return LoginResponse(
            success=True,
            message="Login successful",
            user={
                "id": 1,
                "username": "admin",
                "role": "Account Manager"
            }
        )
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
