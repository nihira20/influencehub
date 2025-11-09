
# ============================================
# backend/app/routes/influencers.py
# ============================================
from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Influencer
from app.database import execute_query

router = APIRouter()

@router.get("/", response_model=List[Influencer])
async def get_influencers():
    query = "SELECT * FROM influencers"
    results = execute_query(query)
    if results is None:
        raise HTTPException(status_code=500, detail="Database error")
    return results

@router.post("/", response_model=Influencer)
async def create_influencer(influencer: Influencer):
    query = """
        INSERT INTO influencers (name, platform, niche, followers, engagement_rate, earnings, image_url)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    params = (
        influencer.name,
        influencer.platform,
        influencer.niche,
        influencer.followers,
        influencer.engagement_rate,
        influencer.earnings,
        influencer.image_url
    )
    result = execute_query(query, params)
    if result is None:
        raise HTTPException(status_code=500, detail="Failed to create influencer")
    return influencer

@router.get("/{influencer_id}", response_model=Influencer)
async def get_influencer(influencer_id: int):
    query = "SELECT * FROM influencers WHERE id = %s"
    results = execute_query(query, (influencer_id,))
    if not results:
        raise HTTPException(status_code=404, detail="Influencer not found")
    return results[0]