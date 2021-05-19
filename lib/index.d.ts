interface Margins {
    /** margins 1 */
    ma1: this;
    ma2: this;
    ma3: this;
}
interface Padding {
    /** padding 1 */
    pa1: this;
    pa2: this;
    pa3: this;
}
declare type Tac = Margins & Padding & string;
declare const tac: Tac;
export default tac;
