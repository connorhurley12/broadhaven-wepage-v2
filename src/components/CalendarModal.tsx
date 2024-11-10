import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { event } from "@/lib/analytics"

export function CalendarModal() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      // Track calendar selection in Analytics
      event({
        action: 'select_date',
        category: 'Consultation',
        label: selectedDate.toISOString(),
      })
      
      // Open Google Calendar in new window
      const startTime = new Date(selectedDate)
      startTime.setHours(10, 0, 0, 0)
      
      const endTime = new Date(selectedDate)
      endTime.setHours(11, 0, 0, 0)
      
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Broadhaven Consultation&details=Initial consultation with Broadhaven Small Business Consulting&dates=${startTime.toISOString().replace(/[-:]/g, '').replace('.000', '')}/${endTime.toISOString().replace(/[-:]/g, '').replace('.000', '')}`
      
      window.open(url, '_blank')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Book a Free Consultation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Consultation</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="rounded-md border"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}