# ============================================
# backend/app/routes/campaigns.py
# ============================================
from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Campaign
from app.database import execute_query

router = APIRouter()

@router.get("/", response_model=List[Campaign])
async def get_campaigns():
    query = "SELECT * FROM campaigns"
    results = execute_query(query)
    if results is None:
        raise HTTPException(status_code=500, detail="Database error")
    return results

@router.post("/", response_model=Campaign)
async def create_campaign(campaign: Campaign):
    query = """
        INSERT INTO campaigns (name, client, platform, start_date, end_date, budget, status, description)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    params = (
        campaign.name,
        campaign.client,
        campaign.platform,
        campaign.start_date,
        campaign.end_date,
        campaign.budget,
        campaign.status,
        campaign.description
    )
    result = execute_query(query, params)
    if result is None:
        raise HTTPException(status_code=500, detail="Failed to create campaign")
    return campaign
