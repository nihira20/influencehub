# ============================================
# backend/app/routes/payments.py
# ============================================
from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Payment
from app.database import execute_query

router = APIRouter()

@router.get("/", response_model=List[Payment])
async def get_payments():
    query = "SELECT * FROM payments"
    results = execute_query(query)
    if results is None:
        raise HTTPException(status_code=500, detail="Database error")
    return results

@router.post("/", response_model=Payment)
async def create_payment(payment: Payment):
    query = """
        INSERT INTO payments (influencer_id, campaign_id, amount, due_date, payment_method, status, invoice_number, notes)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    params = (
        payment.influencer_id,
        payment.campaign_id,
        payment.amount,
        payment.due_date,
        payment.payment_method,
        payment.status,
        payment.invoice_number,
        payment.notes
    )
    result = execute_query(query, params)
    if result is None:
        raise HTTPException(status_code=500, detail="Failed to create payment")
    return payment
