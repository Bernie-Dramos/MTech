import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would send this data to an email service
    // or save it to a database. For this example, we'll just log it.
    console.log("Contact form submission received:")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)

    // Simulate a delay for network request
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form submission:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
