async function postReq(url, body) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			throw new Error('Failed to fetch');
		}

		return await res.text();
	} catch (err) {
		console.error(err, 'Something went wrong');
	}
}

export { postReq };
