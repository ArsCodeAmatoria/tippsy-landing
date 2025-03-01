import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g. us1, us2, etc.
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add member to list
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID as string,
      {
        email_address: email,
        status: 'subscribed',
      }
    );

    return NextResponse.json(
      { success: true, memberId: response.id },
      { status: 200 }
    );
  } catch (error: any) {
    // Check if it's an existing member
    if (error.status === 400 && error.response?.text) {
      const response = JSON.parse(error.response.text);
      if (response.title === 'Member Exists') {
        return NextResponse.json(
          { success: true, message: 'Already subscribed' },
          { status: 200 }
        );
      }
    }

    console.error('Mailchimp error:', error);
    return NextResponse.json(
      { error: 'An error occurred while subscribing' },
      { status: 500 }
    );
  }
} 