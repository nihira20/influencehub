from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, influencers, campaigns, payments, contracts

app = FastAPI(title="InfluenceHub API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(influencers.router, prefix="/api/influencers", tags=["influencers"])
app.include_router(campaigns.router, prefix="/api/campaigns", tags=["campaigns"])
app.include_router(payments.router, prefix="/api/payments", tags=["payments"])
app.include_router(contracts.router, prefix="/api/contracts", tags=["contracts"])

@app.get("/")
def read_root():
    return {"message": "Welcome to InfluenceHub API"}