import { css } from '@emotion/core'

export default css`
  .container {
    max-width: 1095px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 7px;
    padding-right: 7px;
  }

  .row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -7px;
    margin-right: -7px;
  }

  .col {
    position: relative;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 7px;
    padding-left: 7px;
    width: 100%;
  }
  .col-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.33333%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.66667%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.33333%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.66667%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.33333%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.66667%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.66667%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }

  @media screen and (min-width: 768px) {
    .col-md-1 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 8.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 8.33333%;
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-md-2 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 16.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 16.66667%;
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-md-3 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 25%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 33.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-md-5 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 41.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 41.66667%;
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-md-6 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 50%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 58.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 58.33333%;
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-md-8 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 66.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-md-9 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 75%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 83.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 83.33333%;
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-md-11 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 91.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 91.66667%;
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-md-12 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }

  @media screen and (min-width: 960px) {
    .col-lg-1 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 8.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 8.33333%;
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-lg-2 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 16.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 16.66667%;
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-lg-3 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 25%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 33.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-lg-5 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 41.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 41.66667%;
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 50%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 58.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 58.33333%;
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-lg-8 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 66.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-lg-9 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 75%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 83.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 83.33333%;
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-lg-11 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 91.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 91.66667%;
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-lg-12 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    .col-xl-1 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 8.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 8.33333%;
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-xl-2 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 16.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 16.66667%;
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-xl-3 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 25%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 33.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-xl-5 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 41.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 41.66667%;
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-xl-6 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 50%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 58.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 58.33333%;
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-xl-8 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 66.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-xl-9 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 75%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 83.33333%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 83.33333%;
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-xl-11 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 91.66667%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 91.66667%;
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-xl-12 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
  }
`
