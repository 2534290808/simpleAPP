/**
 * Created by lmy2534290808 on 2017/5/7.
 */
import Student from './Student';
export default class Lmy extends Student{
    constructor(){
        super("lmy",24,'boy');
    }
    getText(){
        return super.getText();
    }
}