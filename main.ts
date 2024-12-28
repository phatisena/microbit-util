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

    //%blockid="util_runandre"
    //%block="run do"
    //%handlerStatement=2
    //%group="run event"
    //%weight=1
    export function runToRe( result:() => (any|any[]|any[][]|any[][][]|any[][][][]|any[][][][][]|any[][][][][][]|any[][][][][][][]|any[][][][][][][][])) {
        return result()
    }
}
