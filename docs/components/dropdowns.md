# Dropdowns

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

<hr>

#### Examples
We created a `drop-down` component that can be used to create dropdowns.
You can use the defaul trigger which is an `<a>` or  change to a custom one via `slot="title"` to better fit your potential needs.

<div class="demo-block bd-example demo-box demo-components">
  <drop-down tag="div">
    <button aria-label="Regular" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary"><i></i>
      Regular
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
    </ul>
  </drop-down>
</div>

```html
<drop-down tag="div">
  <button aria-label="Regular" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary"><i></i>
    Regular
  </button>
  <ul class="dropdown-menu">
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Another action</a>
    <a href="#" class="dropdown-item">Something else here</a>
  </ul>
</drop-down>
```

#### Dropdown link

<div class="demo-block bd-example demo-box demo-components">
  <drop-down tag="div">
    <button aria-label="Dropdown link" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
      Dropdown link
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
    </ul>
  </drop-down>
</div>

```html
<drop-down tag="div">
  <button aria-label="Dropdown link" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
    Dropdown link
  </button>
  <ul class="dropdown-menu">
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Another action</a>
    <a href="#" class="dropdown-item">Something else here</a>
  </ul>
</drop-down>
```


#### Colors

The best part is you can do this with any button variant, too:



<div>
   <drop-down tag="div">
     <button aria-label="Primary" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-primary">
        Primary
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>
</div>

<div>
   <drop-down tag="div">
     <button aria-label="Secondary" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
        Secondary
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>
</div>

<div>
  <drop-down tag="div">
    <button aria-label="Success" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-success">
       Success
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>

<div>
  <drop-down tag="div">
    <button aria-label="Info" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-info">
       Info
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>

<div>
  <drop-down tag="div">
    <button aria-label="Warning" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-warning">
       Warning
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>

<div>
  <drop-down tag="div">
    <button aria-label="Danger" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-danger">
       Danger
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>


```html
<div class="btn-group">
   <drop-down tag="div">
     <button aria-label="Primary" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-primary">
        Primary
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>

   <drop-down tag="div">
     <button aria-label="Secondary" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
        Secondary
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>

   <drop-down tag="div">
     <button aria-label="Success" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-success">
        Success
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>

   <drop-down tag="div">
     <button aria-label="Info" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-info">
        Info
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>

   <drop-down tag="div">
     <button aria-label="Warning" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-warning">
        Warning
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>

   <drop-down tag="div">
     <button aria-label="Danger" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-danger">
        Danger
     </button>
     <ul class="dropdown-menu">
       <a href="#" class="dropdown-item">Action</a>
       <a href="#" class="dropdown-item">Another action</a>
       <a href="#" class="dropdown-item">Something else here</a>
       <div class="dropdown-divider"></div>
       <a href="#" class="dropdown-item">Separated link</a>
     </ul>
   </drop-down>
</div>
```


#### Split button dropdowns

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.
We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns.
Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button


<div class="demo-block bd-example demo-box demo-components">
  <drop-down class="btn-group">
    <button type="button" class="btn btn-danger">Action</button>
    <button type="button" class="btn dropdown-toggle dropdown-toggle-split btn-danger" data-toggle="dropdown" aria-haspopup="true">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>

```html
<div>
  <drop-down class="btn-group">
    <button type="button" class="btn btn-danger">Action</button>
    <button type="button" class="btn dropdown-toggle dropdown-toggle-split btn-danger" data-toggle="dropdown" aria-haspopup="true">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">Separated link</a>
    </ul>
  </drop-down>
</div>
```


#### Dropup variation

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

<div class="demo-block bd-example demo-box demo-components">
  <drop-down tag="div" class="dropup">
    <button aria-label="Dropup" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary"><i></i>
        Dropup
      </button> <ul class="dropdown-menu"><a href="#" class="dropdown-item">Action</a> <a href="#" class="dropdown-item">Another action</a> <a href="#" class="dropdown-item">Something else here</a></ul>
  </drop-down>
</div>

```html
<drop-down tag="div" class="dropup">
  <button aria-label="Dropup" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary"><i></i>
      Dropup
    </button> <ul class="dropdown-menu"><a href="#" class="dropdown-item">Action</a> <a href="#" class="dropdown-item">Another action</a> <a href="#" class="dropdown-item">Something else here</a></ul>
</drop-down>
```


#### Colors

Set for the `menu-classes` to `.dropdown-black` class to change the drodown background’s color.

<div class="demo-block bd-example demo-box demo-components">
  <drop-down tag="div">
    <button aria-label="Black menu" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
      Black menu
    </button>
    <ul class="dropdown-menu dropdown-black">
      <h6 class="dropdown-header">Dropdown header</h6>
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Another action</a>
      <a href="#" class="dropdown-item">Something else here</a>
    </ul>
  </drop-down>
</div>


```html
<drop-down tag="div">
  <button aria-label="Black menu" data-toggle="dropdown" class="dropdown-toggle btn-rotate btn btn-secondary">
    Black menu
  </button>
  <ul class="dropdown-menu dropdown-black">
    <h6 class="dropdown-header">Dropdown header</h6>
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Another action</a>
    <a href="#" class="dropdown-item">Something else here</a>
  </ul>
</drop-down>
```

#### Props

<props-table component-name="drop-down"></props-table>


<style>
.dropdown + .dropdown {
  margin-left: 5px;
}
</style>
