import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function FarmLandInfo({updateFormData}) {
  const handleChange = (e)=> {
    updateFormData({[e.target.name]: e.target.value})
  }
  return (
    <main className="space-y-4">
    <div>
      <Label htmlFor="land_size">Land Size (acres)</Label>
      <Input id="land_size" name="land_size" type="number" onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="farm_location">Farm Location</Label>
      <Input id="farm_location" name="farm_location" onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="crop_type">Crop Type</Label>
      <Input id="crop_type" name="crop_type" onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="soil_type">Soil Type</Label>
      <Select onValueChange={(value) => updateFormData({ soil_type: value })}>
        <SelectTrigger id="soil_type">
          <SelectValue placeholder="Select soil type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="clay">Clay</SelectItem>
          <SelectItem value="sandy">Sandy</SelectItem>
          <SelectItem value="silt">Silt</SelectItem>
          <SelectItem value="loam">Loam</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div>
      <Label htmlFor="farming_practice">Farming Practice</Label>
      <Select onValueChange={(value) => updateFormData({ farming_practice: value })}>
        <SelectTrigger id="farming_practice">
          <SelectValue placeholder="Select farming practice" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="organic">Organic</SelectItem>
          <SelectItem value="conventional">Conventional</SelectItem>
          <SelectItem value="mixed">Mixed</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div>
      <Label htmlFor="mechanization">Mechanization</Label>
      <Select onValueChange={(value) => updateFormData({ mechanization: value })}>
        <SelectTrigger id="mechanization">
          <SelectValue placeholder="Select mechanization level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </main>
  )
}

export default FarmLandInfo