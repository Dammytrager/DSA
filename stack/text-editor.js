// https://www.hackerrank.com/challenges/simple-text-editor/problem

/**
 * @param input {array}
 */
function textEditor(input) {
    let base = [];

    for (let i = 0; i < input.length; i++) {
        const operation = input[i]
        const presentState = !!base.length ? base[base.length - 1] : ''
        const [action, extra] = operation.split(' ')

        switch (action) {
            case '1':
                base.push(presentState + extra);
                break;
            case '2':
                base.push(presentState.substring(0, presentState.length - parseInt(extra)));
                break;
            case '3':
                console.log(presentState[parseInt(extra) - 1]);
                break;
            case '4':
                base.pop();
                break;
            default:
                throw new Error('Invalid action')
        }
    }
}

const input = [
    '1 zsfncpxdzl', '3 4', '3 6', '2 1', '3 7', '3 2', '4', '2 4', '2 6', '4', '4', '1 1', '1 hpe', '3 6', '2 7', '4',
    '3 6', '4', '3 6', '1 zipsqagri', '1 vuqxstnj', '4', '3 13', '4', '3 10', '3 6', '1 uzdpy', '1 bupqp', '1 kn', '2 6',
    '3 8', '1 iiuvfbn', '4', '2 1', '2 12', '4', '3 7', '4', '2 9', '3 1', '1 axbhx', '1 wovbfyvt', '3 11', '3 7', '3 2',
    '4', '1 tjmqp', '4', '2 6', '3 4'
]

textEditor(input)