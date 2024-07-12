import { NgModule } from '@angular/core';
import { ProductCustomCarouselModule } from './components/carousel/product-carousel/product-carousel.module';
import { ProductCustomReviewsModule } from './components/product-tabs/product-reviews/product-reviews.module';
import { ProductCustomStoreModule } from './store/product-store.module';
import { ProductCustomOccModule } from './occ/product-occ.module';

@NgModule({
  imports: [
    ProductCustomStoreModule,
    ProductCustomOccModule,
    ProductCustomCarouselModule,
    ProductCustomReviewsModule
  ]
})
export class ProductCustomFeatureModule { }