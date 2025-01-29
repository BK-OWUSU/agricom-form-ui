import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function FarmerInfo({updateFormData}) {
  const handleChange = (e)=> {
    updateFormData({[e.target.name]: e.target.value})
  }
  return (
    <main className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first_name">First Name</Label>
          <Input id="first_name" name="first_name" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="surname">Surname</Label>
          <Input id="surname" name="surname" onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="last_name">Last Name</Label>
          <Input id="last_name" name="last_name" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select onValueChange={(value) => updateFormData({ gender: value })}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="age">Age</Label>
          <Input id="age" name="age" type="number" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="contact_details">Contact Details</Label>
          <Input id="contact_details" name="contact_details" onChange={handleChange} />
        </div>
      </div>
      <div>
        <Label htmlFor="residential_address">Residential Address</Label>
        <Input id="residential_address" name="residential_address" onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="farming_experience">Farming Experience (years)</Label>
          <Input id="farming_experience" name="farming_experience" type="number" onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="education_level">Education Level</Label>
          <Select onValueChange={(value) => updateFormData({ education_level: value })}>
            <SelectTrigger id="education_level">
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="tertiary">Tertiary</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="farm_gps_coordinates">Farm GPS Coordinates</Label>
        <Input id="farm_gps_coordinates" name="farm_gps_coordinates" onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="farm_association_memb">Farm Association Membership</Label>
        <Input id="farm_association_memb" name="farm_association_memb" onChange={handleChange} />
      </div>
    </main>
  )
}

export default FarmerInfo