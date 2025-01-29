import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function FarmYieldInfo({updateFormData}) {
  const handleChange = (e)=> {
    updateFormData({[e.target.name]: e.target.value})
  }

  return (
    <main className="space-y-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="harvest_dates">Harvest Date</Label>
        <Input  id="harvest_dates" name="harvest_dates" type="date" onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="yield_per_acre">Yield per Acre</Label>
        <Input id="yield_per_acre" min={0} name="yield_per_acre" type="number" onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="market_prices">Market Prices</Label>
        <Input id="market_prices" min={0} name="market_prices" type="number" onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="revenue">Revenue</Label>
        <Input id="revenue" min={0} name="revenue" type="number" onChange={handleChange} />
      </div>
    </main>
  )
}

export default FarmYieldInfo