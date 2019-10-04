# Dropdowns

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

<hr>

#### Examples
We created a `drop-down` component that can be used to create dropdowns.
You can use the defaul trigger which is an `<a>` or  change to a custom one via `slot="title"` to better fit your potential needs.

:::demo
```html
<drop-down tag="div" title-classes="btn btn-secondary"
               title="Regular">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</drop-down>
```
:::

#### Dropdown link

:::demo
```html
<drop-down title-classes="btn btn-secondary"
               title="Dropdown link">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </drop-down>
```
:::

#### Colors

The best part is you can do this with any button variant, too:

:::demo
```html
<div class="btn-group">
   <drop-down title="Primary" title-classes="btn btn-primary">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>
   <drop-down title="Secondary" title-classes="btn btn-secondary">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>
   <drop-down title="Success" title-classes="btn btn-success">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>    
   <drop-down title="Info" title-classes="btn btn-info">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>     
   <drop-down title="Warning" title-classes="btn btn-warning">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>  
   <drop-down title="Danger" title-classes="btn btn-danger">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </drop-down>        
</div>
```
:::

#### Split button dropdowns

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.
We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns.
Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button

:::demo
```html
<div>
  <drop-down class="btn-group">
    <template slot="title-container" slot-scope="{isOpen}">
     <base-button type="danger">Action</base-button>
      <base-button type="danger" class="dropdown-toggle dropdown-toggle-split"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   :aria-expanded="isOpen">
        <span class="sr-only">Toggle Dropdown</span>
      </base-button>
    </template>

    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </drop-down>
</div>
```
:::

#### Dropup variation

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

:::demo
```html
<drop-down class="dropup"
               title-classes="btn btn-secondary"
               title="Dropup">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</drop-down>
```
:::

#### Colors

Set for the `menu-classes` to `.dropdown-black` class to change the drodown background’s color.

:::demo
```html
<drop-down menu-classes="dropdown-black"
               title-classes="btn btn-secondary"
               title="Black menu">
    <h6 class="dropdown-header">Dropdown header</h6>
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</drop-down>
```
:::

#### Props

<props-table component-name="drop-down"></props-table>


<style>
.dropdown + .dropdown {
  margin-left: 5px;
}
</style>
