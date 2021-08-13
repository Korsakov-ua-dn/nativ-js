export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    payload: {
        amountOfBYN: string,
        amountOfCurrency: string,
    }
};

// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
      type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
      payload: { amountOfBYN, amountOfCurrency},
    };
};

export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    payload: {
        isBuying: boolean,
        amountOfBYN: '',
        amountOfCurrency: '',
    },
};

// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    // amountOfBYN = '' - nbvcbdncdnb
    // amountOfCurrency = '' - dcmcvdnb
    return {
        type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: {
            isBuying,
            amountOfBYN: '',
            amountOfCurrency: '',
        },
    };
};

export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: {
        currentCurrency: string,
        amountOfBYN: '',
        amountOfCurrency: '',
    }
};

// @ts-ignore
export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    // amountOfBYN = '' - nbvcbdncdnb
    // amountOfCurrency = '' - dcmcvdnb
    return {
        type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: {
            currentCurrency,
            amountOfBYN: '',
            amountOfCurrency: '',
        }
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;