import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from the environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; 

export async function POST(req) {
  // Parse the JSON body from the request
  const { email, subject, message } = await req.json();

  // Log the received data for debugging purposes
  console.log(email, subject, message);

  try {
    // Send the email using the Resend API
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      ),
    });

    // Return the response as JSON
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors by returning an error message
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
