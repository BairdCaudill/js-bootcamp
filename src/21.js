function converter(f) {
  const c = ((f - 32) * 5) / 9
	return {
		f: f,
		c: c,
		k: c + 273.15,
	}
}

console.log(converter(98))
