/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
export class BaseTransformer {
    static transform(data) {
        const array = []

        data.forEach(element => {
            array.push(this.singleTransform(element))
        })

        return array
    }

    static singleTransform(element) { }
}