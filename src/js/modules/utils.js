function transformFormData(formData) {
	return Object.fromEntries(formData.entries());
}

export { transformFormData };
