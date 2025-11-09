# ============================================
# backend/app/routes/contracts.py
# ============================================
from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Contract
from app.database import execute_query

router = APIRouter()

@router.get("/", response_model=List[Contract])
async def get_contracts():
    query = "SELECT * FROM contracts"
    results = execute_query(query)
    if results is None:
        raise HTTPException(status_code=500, detail="Database error")
    return results

@router.post("/", response_model=Contract)
async def create_contract(contract: Contract):
    query = """
        INSERT INTO contracts (title, influencer_id, campaign_id, start_date, end_date, value, status)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    params = (
        contract.title,
        contract.influencer_id,
        contract.campaign_id,
        contract.start_date,
        contract.end_date,
        contract.value,
        contract.status
    )
    result = execute_query(query, params)
    if result is None:
        raise HTTPException(status_code=500, detail="Failed to create contract")
    return contract
