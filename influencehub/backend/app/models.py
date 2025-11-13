
# ============================================
# backend/app/models.py
# ============================================
from pydantic import BaseModel
from typing import Optional
from datetime import date

class Influencer(BaseModel):
    id: Optional[int] = None
    name: str
    platform: str
    niche: str
    followers: int
    engagement_rate: float
    earnings: int
    image_url: Optional[str] = None

class Campaign(BaseModel):
    id: Optional[int] = None
    name: str
    client: str
    platform: str
    start_date: date
    end_date: date
    budget: int
    status: str
    description: Optional[str] = None

class Payment(BaseModel):
    id: Optional[int] = None
    influencer_id: int
    campaign_id: int
    amount: float
    due_date: date
    payment_method: str
    status: str
    invoice_number: Optional[str] = None
    notes: Optional[str] = None

class Contract(BaseModel):
    id: Optional[int] = None
    title: str
    influencer_id: int
    campaign_id: Optional[int] = None
    start_date: date
    end_date: date
    value: int
    status: str
