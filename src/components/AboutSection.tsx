import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Broadhaven</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're technology consultants passionate about helping home service businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Experience</CardTitle>
              <CardDescription>
                Over a decade of experience in digital transformation for home service businesses.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Client Success</CardTitle>
              <CardDescription>
                Helped 100+ businesses implement efficient technology solutions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Innovation</CardTitle>
              <CardDescription>
                Cutting-edge solutions tailored for the home service industry.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}