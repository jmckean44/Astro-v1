import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Outputs: /builtwith.json
// MIDDLEWARE AUTHENTICATION
export const POST: APIRoute = async ({ params, request }) => {
	const body = await request.json();
	const { to, from, subject, html, text } = body;
	console.log({ to, from, subject, html, text });

	if (!to || !from || !subject || !html) {
		return new Response(null, {
			status: 404,
			statusText: 'Did not provide all the data',
		});
	}
	const send = await resend.emails.send({
		to,
		from,
		subject,
		html,
		text,
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
