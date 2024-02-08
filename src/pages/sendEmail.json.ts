import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Outputs: /builtwith.json
export const POST: APIRoute = async ({ params, request }) => {
	const send = await resend.emails.send({
		from: 'admin@pbmarketing.ca',
		to: 'jeff@pbmarketing.ca',
		subject: 'Hello from Resend!',
		html: '<h1>Hello</h1><p>How are you HTML.</p>',
		text: 'Hello. Blocked HTML text version.</p>',
	});

	if (send.data) {
		return new Response(
			JSON.stringify({
				message: send.data,
			}),
			{
				status: 200,
				statusText: 'OK',
			}
		);
	} else {
		return new Response(
			JSON.stringify({
				message: send.error,
			}),
			{
				status: 500,
				statusText: 'Server Error',
			}
		);
	}
};
