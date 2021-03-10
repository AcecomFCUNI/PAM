const codeRules = { 
  uni: {
    lenght: 9,
    regex: /^[0-9]{8}[A-Z]$/
  }
};

export const isAValidCodeByRule = (code, rule) => codeRules[rule].regex.test(code);