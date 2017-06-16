import ProductDetailComp from '../Containers/CartProductContainer/CartProductWrapper';
import CarouselProductComp from '../Containers/CarouselProductContainer/CarouselProductWrapper';
import GoogleMapComp from '../Containers/CarouselProductContainer/CarouselProductWrapper';
import {SimpleComponent} from './DumbComponents/SimpleComponent';
import {SimpleComponent2} from './DumbComponents/SimpleComponent2';

module.exports = {
    ProductDetail:  ProductDetailComp,
    CarouselProduct: CarouselProductComp,
    DumbComponent: SimpleComponent,
    DumbComponent1: SimpleComponent2
}

function sum(a){
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
} 

var z = sum(10)(20)(30)