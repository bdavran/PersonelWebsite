"use client"

import * as React from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ContactFormLabels } from "@/lib/content/types"

// There is no backend yet: submitting opens the visitor's mail app with the
// message pre-filled. Swap handleSubmit for a Server Action to send directly.
export function ContactForm({
  email,
  labels,
}: {
  email: string
  labels: ContactFormLabels
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name"))
    const from = String(data.get("email"))
    const message = String(data.get("message"))

    const subject = `${labels.subjectPrefix}: ${name}`
    const body = `${message}\n\n${name} <${from}>`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">{labels.name}</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{labels.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={labels.emailPlaceholder}
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{labels.message}</Label>
        {/* Same styling as <Input /> so the form reads as one set of fields. */}
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder={labels.messagePlaceholder}
          className="flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto sm:justify-self-end">
        {labels.submit}
        <Send className="ml-2 size-4" aria-hidden="true" />
      </Button>
    </form>
  )
}
