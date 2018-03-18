import { timeFormat } from 'd3-time-format';
export const periodTypes = [
    { id: 'relativePeriods', name: 'Relative' },
    { id: 'Daily', name: 'Daily' },
    { id: 'Weekly', name: 'Weekly' },
    { id: 'Monthly', name: 'Monthly' },
    { id: 'BiMonthly', name: 'Bi-monthly' },
    { id: 'Quarterly', name: 'Quarterly' },
    { id: 'SixMonthly', name: 'Six-monthly' },
    { id: 'SixMonthlyApril', name: 'Six-monthly April' },
    { id: 'Yearly', name: 'Yearly' },
    { id: 'FinancialOctober', name: 'Financial year (Start October)' },
    { id: 'FinancialJuly', name: 'Financial year (Start July)' },
    { id: 'FinancialApril', name: 'Financial year (Start April)' }
];

export const relativePeriods = [
    { id: 'TODAY', name: 'Today' },
    { id: 'YESTERDAY', name: 'Yesterday' },
    { id: 'THIS_WEEK', name: 'This week' },
    { id: 'LAST_WEEK', name: 'Last week' },
    { id: 'LAST_4_WEEKS', name: 'Last 4 weeks' },
    { id: 'LAST_12_WEEKS', name: 'Last 12 weeks' },
    { id: 'LAST_52_WEEKS', name: 'Last 52 weeks' },
    { id: 'THIS_MONTH', name: 'This month' },
    { id: 'LAST_MONTH', name: 'Last month' },
    { id: 'LAST_3_MONTHS', name: 'Last 3 months' },
    { id: 'LAST_6_MONTHS', name: 'Last 6 months' },
    { id: 'LAST_12_MONTHS', name: 'Last 12 months' },
    { id: 'THIS_BIMONTH', name: 'This bi-month' },
    { id: 'LAST_BIMONTH', name: 'Last bi-month' },
    { id: 'LAST_6_BIMONTHS', name: 'Last 6 bi-months' },
    { id: 'THIS_QUARTER', name: 'This quarter' },
    { id: 'LAST_QUARTER', name: 'Last quarter' },
    { id: 'LAST_4_QUARTERS', name: 'Last 4 quarters' },
    { id: 'THIS_SIX_MONTH', name: 'This six-month' },
    { id: 'LAST_SIX_MONTH', name: 'Last six-month' },
    { id: 'LAST_2_SIX_MONTHS', name: 'Last 2 six-months' },
    { id: 'THIS_YEAR', name: 'This year' },
    { id: 'LAST_YEAR', name: 'Last year' },
    { id: 'LAST_5_YEARS', name: 'Last 5 years' },
    { id: 'THIS_FINANCIAL_YEAR', name: 'This financial year' },
    { id: 'LAST_FINANCIAL_YEAR', name: 'Last financial year' },
    { id: 'LAST_5_FINANCIAL_YEARS', name: 'Last 5 financial years' }
];

const formatTime = timeFormat('%Y-%m-%d');

/* EVENT LAYER */
export const EVENT_START_DATE = formatTime(new Date().setFullYear(new Date().getFullYear() - 1));
export const EVENT_END_DATE = formatTime(new Date());
