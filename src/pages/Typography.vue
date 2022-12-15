<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">White Table Heading</h5>

            <h3 class="card-title">Created using Poppins Font Family</h3>
          </template>

          <div class="typography-line text-left mt-5">
            <h1>
              <span>Header 1</span>
              The Life of White Dashboard
            </h1>
          </div>

          <div class="typography-line text-left">
            <h2>
              <span>Header 2</span>
              The Life of White Dashboard
            </h2>
          </div>

          <div class="typography-line text-left">
            <h3>
              <span>Header 3</span>
              The Life of White Dashboard
            </h3>
          </div>

          <div class="typography-line text-left">
            <h4>
              <span>Header 4</span>
              The Life of White Dashboard
            </h4>
          </div>

          <div class="typography-line text-left">
            <h5>
              <span>Header 5</span>
              The Life of White Dashboard
            </h5>
          </div>

          <div class="typography-line text-left">
            <h6>
              <span>Header 6</span>
              The Life of White Dashboard
            </h6>
          </div>

          <div class="typography-line text-left">
            <p>
              <span>Paragraph</span>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Quote</span>

            <blockquote>
              <p class="blockquote blockquote-primary">
                "I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at."
                <br />

                <br />

                <small> - Noaa </small>
              </p>
            </blockquote>
          </div>

          <div class="typography-line text-left">
            <span>Muted Text</span>

            <p class="text-muted">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Primary Text</span>

            <p class="text-primary">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Info Text</span>

            <p class="text-info">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Success Text</span>

            <p class="text-success">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Warning Text</span>

            <p class="text-warning">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <span>Danger Text</span>

            <p class="text-danger">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </div>

          <div class="typography-line text-left">
            <h2>
              <span>Small Tag</span>
              Header with small subtitle
              <br />

              <small>Use "small" tag for the headers</small>
            </h2>
          </div>

          <div class="typography-line text-left">
            <span>Lists</span>

            <div class="row">
              <div class="col-md-3">
                <h5>Unordered List</h5>

                <ul>
                  <li>List Item</li>

                  <li>List Item</li>

                  <li class="list-unstyled">
                    <ul>
                      <li>List Item</li>

                      <li>List Item</li>

                      <li>List Item</li>
                    </ul>
                  </li>

                  <li>List Item</li>
                </ul>
              </div>

              <div class="col-md-3">
                <h5>Ordered List</h5>

                <ol>
                  <li>List Item</li>

                  <li>List Item</li>

                  <li>List item</li>

                  <li>List Item</li>
                </ol>
              </div>

              <div class="col-md-3">
                <h5>Unstyled List</h5>

                <ul class="list-unstyled">
                  <li>List Item</li>

                  <li>List Item</li>

                  <li>List item</li>

                  <li>List Item</li>
                </ul>
              </div>

              <div class="col-md-3">
                <h5>Inline List</h5>

                <ul class="list-inline">
                  <li class="list-inline-item">List1</li>

                  <li class="list-inline-item">List2</li>

                  <li class="list-inline-item">List3</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="typography-line text-left">
            <span>Code</span>

            <p>
              This is
              <code>.css-class-as-code</code>
              , an example of an inline code element. Wrap inline code within a
              <code> &lt;code&gt;...&lt;/code&gt;</code>
              tag.
            </p>

            <pre>1. #This is an example of preformatted text.<br/>2. #Here is another line of code</pre>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components/index";

export default {
  components: {
    Card,
  },
};
</script>

<style></style>
