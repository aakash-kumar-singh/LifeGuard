export const insuranceData = {
  categories: [
    {
      id: "term",
      label: "Term Insurance",
      description: "Pure life coverage at affordable rates",
      icon: "Shield",
    },
    {
      id: "endowment",
      label: "Endowment Plans",
      description: "Insurance with savings benefit",
      icon: "Wallet",
    },
    {
      id: "ulip",
      label: "ULIP Plans",
      description: "Market-linked insurance investment",
      icon: "TrendingUp",
    },
    {
      id: "pension",
      label: "Pension Plans",
      description: "Secure retirement solutions",
      icon: "Heart",
    },
  ],

  plans: {
    term: [
      {
        id: "smart-shield",
        name: "Smart Shield Plus",
        tagline: "Maximum protection at minimum premium",
        coverage: {
          amount: "1 Crore",
          range: {
            min: "25 Lakhs",
            max: "5 Crore",
          },
        },
        premium: {
          monthly: 599,
          quarterly: 1747,
          halfYearly: 3374,
          yearly: 6499,
        },
        term: {
          default: 30,
          range: {
            min: 5,
            max: 40,
          },
        },
        features: [
          "Whole Life Coverage Option",
          "Critical Illness Cover",
          "Accidental Death Benefit",
          "Tax Benefits under 80C",
          "Premium Waiver Option",
          "Terminal Illness Benefit",
        ],
        eligibility: {
          age: {
            min: 18,
            max: 65,
          },
          income: "3 Lakhs p.a.",
        },
        recommended: true,
        tags: ["Bestseller", "High Coverage", "Low Premium"],
        rating: 4.8,
        reviews: 1250,
      },
      // Add more term plans...
    ],
    endowment: [
      {
        id: "wealth-plus",
        name: "Wealth Plus Advantage",
        tagline: "Guaranteed returns with life coverage",
        coverage: {
          amount: "25 Lakhs",
          range: {
            min: "5 Lakhs",
            max: "50 Lakhs",
          },
        },
        premium: {
          monthly: 5999,
          quarterly: 17499,
          halfYearly: 33749,
          yearly: 64999,
        },
        term: {
          default: 20,
          range: {
            min: 10,
            max: 30,
          },
        },
        features: [
          "Guaranteed Maturity Benefit",
          "Annual Bonus",
          "Loan Facility",
          "Tax Benefits under 80C",
          "Partial Withdrawal Option",
          "Death Benefit",
        ],
        eligibility: {
          age: {
            min: 18,
            max: 55,
          },
          income: "5 Lakhs p.a.",
        },
        recommended: false,
        tags: ["Guaranteed Returns", "Savings Plan"],
        rating: 4.6,
        reviews: 850,
      },
      // Add more endowment plans...
    ],
    // Add more categories...
  },

  premiumFactors: {
    age: [
      { range: "18-25", factor: 1 },
      { range: "26-35", factor: 1.2 },
      { range: "36-45", factor: 1.5 },
      { range: "46-55", factor: 1.8 },
      { range: "56-65", factor: 2.2 },
    ],
    gender: {
      male: 1,
      female: 0.9,
    },
    smoker: {
      yes: 1.5,
      no: 1,
    },
  },
};
