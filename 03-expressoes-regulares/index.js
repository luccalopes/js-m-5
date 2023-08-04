function phoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
}
console.log(new phoneNumber('+55 (11) 9 9876-5432'))
console.log(new phoneNumber('+1 (55) as555-999-8888'))