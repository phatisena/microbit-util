//%block="UtilBit"
//%color="#f2b72e"
//%icon="\uf0e7"
namespace util {

    export enum nullType { Undefined = 1, Null = 2, Nan = 3}

    /**
     * get the null
     * value type
     */
    //%blockid=util_nulltype
    //%block="$t"
    //%group="null value"
    //%weight=1
    export function getNull(t:nullType): any {
        switch (t) {
            case 1:
            return undefined
            case 2:
            return null
            case 3:
            return NaN
            default:
            return undefined
        }
    }

    let mathPi = 3.14159265359
    let mathPhi = 1.6180339887

    export enum mathTval {
        //%block="π"
        Pi = 1,
        //%block="φ"
        Phi = 2
    }

    /**
     * get advance math
     * number value template
     */
    //%blockid=util_mathtemp
    //%block="$t"
    //%group="math temp"
    //%weight=1
    export function mathTmp(t:mathTval) {
        switch (t) {
            case 1:
            return mathPi;
            case 2:
            return mathPhi;
            default:
            return -1
        }
    }

    export enum runType { inBackground = 1, untilDone = 2}

    /**
     * statement function
     * with the run step type
     * in the statement
     */
    //%blockid=util_runtype
    //%block="on run in zone $t do"
    //%handlerStatement=1
    //%group="timer"
    //%weight=1
    export function runInDo(t:runType, thendo:() => void ) {
        switch (t) {
            case 1:
            control.runInBackground(thendo)
            return;
            case 2:
            control.runInParallel(thendo)
            return;
            default:
            return;
        }
    }

    //%shim=ENUM_GET
    //%blockId=util_enum_msg
    //%block="$arg"
    //%enumName="msgKey"
    //%enumMemberName="msgId"
    //%enumInitialMembers="myMsg"
    //%enumPromptHint="Enter your massage boardcasting here..."
    //%blockHidden=true
    export function _colorEnumShim(arg: number) {
        return arg;
    }

    let castKey: {[key:number]: boolean} = {}

    //%blockid=util_sendmsg
    //%block="send $key as massage"
    //%key.shadow=util_enum_msg
    //%group="boardcast"
    //%weight=2
    export function sendMsg(key:number) {
        castKey[key] = true
    }

    //%blockid=util_remsg
    //%block="on received $key in $run do"
    //%key.shadow=util_enum_msg
    //%group="boardcast"
    //%weight=1
    export function reMsg(key:number, run:runType, thendo:() => void) {
        if (!(castKey[key])) return;
        switch (run) {
            case 1:
            control.runInBackground(thendo)
            break;
            case 2:
            control.runInParallel(thendo)
            break;
            default:
            break;
        }
        castKey[key] = false
    }
}
