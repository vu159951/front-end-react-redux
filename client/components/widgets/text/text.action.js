export const TextAction = {
    'TEXT_CREATION': 'TEXT_CREATION'
}

export const TextActionCreator = {
    createTextWidget: () => {
        return {
            type: TextAction.TEXT_CREATION
        }
    }
}
