;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontqq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM510.976 989.525333c-263.850667 0-477.866667-214.016-477.866667-477.866667s214.016-477.866667 477.866667-477.866667 477.866667 214.016 477.866667 477.866667S774.826667 989.525333 510.976 989.525333z"  ></path>' +
    '' +
    '<path d="M175.445333 535.552c-27.989333 65.877333-32.426667 128.682667-10.24 140.288 15.36 8.192 39.594667-10.24 62.464-44.032 8.874667 36.864 31.402667 69.973333 63.146667 96.938667-33.450667 12.288-54.954667 32.426667-54.954667 55.296 0 37.546667 59.050667 67.584 131.754667 67.584 65.536 0 119.808-24.576 130.048-57.002667 2.730667 0 12.970667 0 15.701333 0 10.24 32.426667 64.512 57.002667 130.048 57.002667 72.704 0 131.754667-30.378667 131.754667-67.584 0-22.869333-21.845333-43.008-54.954667-55.296 31.744-26.624 53.930667-60.074667 63.146667-96.938667 22.869333 33.792 46.762667 52.224 62.464 44.032 22.528-11.605333 18.090667-74.752-9.898667-140.288-21.845333-51.882667-51.882667-89.770667-74.752-98.304 0.341333-3.413333 0.341333-6.826667 0.341333-9.898667 0-20.138667-5.461333-38.570667-15.018667-53.589333 0-1.024 0-2.389333 0-3.413333 0-9.216-2.048-17.749333-5.802667-25.258667-5.802667-134.485333-93.184-241.322667-234.837333-241.322667-141.653333 0-229.376 106.837333-234.837333 241.322667-3.754667 7.509333-5.802667 16.042667-5.802667 25.258667 0 1.024 0 2.389333 0 3.413333-9.557333 15.018667-15.018667 33.450667-15.018667 53.589333 0 3.413333 0 6.826667 0.341333 9.898667C227.328 446.122667 197.290667 484.010667 175.445333 535.552L175.445333 535.552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-signal" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.04 588.768c-75.264 0-136.48 61.216-136.48 136.48s61.216 136.48 136.48 136.48c75.264 0 136.48-61.216 136.48-136.48s-61.216-136.48-136.48-136.48zM511.04 827.616c-56.448 0-102.368-45.92-102.368-102.368s45.92-102.368 102.368-102.368c56.448 0 102.368 45.92 102.368 102.368s-45.92 102.368-102.368 102.368z"  ></path>' +
    '' +
    '<path d="M511.04 435.232c-115.168 0-214.592 67.648-261.376 165.152l25.536 25.536c38.88-91.904 129.92-156.544 235.84-156.544s196.96 64.672 235.84 156.544l25.536-25.536c-46.784-97.504-146.208-165.152-261.376-165.152z"  ></path>' +
    '' +
    '<path d="M512.704 162.272c-190.432 0-358.944 95.136-460.896 240.256l24.448 24.448c95.36-139.104 255.392-230.592 436.416-230.592 180.192 0 339.52 90.624 435.04 228.64l24.448-24.448c-102.08-144.032-269.92-238.304-459.52-238.304z"  ></path>' +
    '' +
    '<path d="M512.704 298.752c-152.896 0-287.2 80.928-362.496 202.144l24.832 24.832c68.416-115.328 194.112-192.864 337.664-192.864 142.688 0 267.776 76.576 336.448 190.752l24.768-24.768c-75.52-120.096-209.152-200.128-361.216-200.128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhuidingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.512 64 64 264.576 64 512s200.512 448 448 448c247.424 0 448-200.576 448-448S759.424 64 512 64zM712.448 664.512c-11.776 0-22.784-3.072-32.448-8.384l-1.984 1.984L511.936 512l-162.112 145.472-1.344-1.344c-9.6 5.248-20.544 8.32-32.192 8.32-36.736 0-66.496-29.76-66.496-66.432 0-11.712 3.072-22.656 8.32-32.192L255.936 563.584l10.752-9.664c3.328-3.712 7.04-7.104 11.136-9.984l188.544-169.216 1.28 0C479.296 363.456 495.168 356.544 512.64 356.544s33.408 6.912 45.12 18.176l0.768 0 191.872 168.832c4.032 2.816 7.68 6.08 11.072 9.728l11.392 10.048-2.368 2.304c5.376 9.6 8.448 20.672 8.448 32.448C778.88 634.752 749.12 664.512 712.448 664.512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M518.836695 286.364504c-58.680353 0-106.267066 49.066411-106.267066 109.573362 0 60.507975 47.586713 109.573362 106.267066 109.573362 58.677283 0 106.26502-49.065388 106.26502-109.573362C625.101715 335.430915 577.513978 286.364504 518.836695 286.364504zM518.836695 67.21778c-176.033897 0-318.760267 147.200256-318.760267 328.720086 0 181.520854 318.760267 547.867834 318.760267 547.867834s318.757197-366.34698 318.757197-547.867834C837.593892 214.418036 694.868545 67.21778 518.836695 67.21778zM518.836695 615.085614c-117.356614 0-212.493201-98.132822-212.493201-219.146724 0-121.012879 95.136587-219.146724 212.493201-219.146724 117.356614 0 212.493201 98.133845 212.493201 219.146724C731.329896 516.951769 636.193309 615.085614 518.836695 615.085614z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M445.146218 674.901554C344.252711 679.625579 262.697586 629.026793 262.697586 561.708712 262.697586 494.315996 344.252711 440.256423 445.146218 435.597355 546.093627 430.949343 627.820134 472.547873 627.820134 539.816204 627.820134 607.139814 546.093627 670.328175 445.146218 674.901554M659.97061 456.178249C635.993891 451.530237 647.650545 438.626925 647.650545 438.626925 647.650545 438.626925 671.092392 399.976418 643.002533 371.886559 608.190127 337.085209 523.612345 376.318963 523.612345 376.318963 491.30569 386.339209 499.856761 371.734528 504.42461 346.895377 504.42461 317.627966 494.404364 268.065758 408.331145 297.338696 322.369877 326.756755 248.551764 429.864392 248.551764 429.864392 197.209407 498.353116 204.017646 551.294566 204.017646 551.294566 216.822829 668.190059 341.018591 700.27005 437.61376 707.866086 539.252221 715.835293 676.399669 672.833926 718.002344 584.498206 759.589819 495.993866 684.00676 460.978292 659.97061 456.178249"  ></path>' +
    '' +
    '<path d="M459.247814 562.443991C452.816889 567.24265 444.908498 566.584769 441.53893 560.818635 437.992455 555.219737 439.320655 546.225013 445.809628 541.500984 453.324123 535.89794 461.153736 537.512237 464.538505 543.12634 467.923274 548.870359 465.499067 557.497443 459.247814 562.443991M399.417965 613.392447C380.467953 615.621777 365.199862 604.700401 365.199862 588.838007 365.199862 573.068215 378.77764 556.536882 397.733181 554.560476 419.484715 552.487322 433.64574 565.035434 433.64574 580.879859 433.64574 596.65518 418.286433 611.254335 399.417965 613.392447M425.013126 480.002937C323.552957 491.875199 335.273189 586.922413 335.273189 586.922413 335.273189 586.922413 334.232466 617.025995 362.478503 632.347988 421.849494 664.513668 482.970228 645.045367 513.878194 605.148203 544.770956 565.256569 526.635001 468.195632 425.013126 480.002937"  ></path>' +
    '' +
    '<path d="M709.36973 415.033047C717.549016 415.033047 724.492701 408.976671 725.674397 401.098686 725.815372 400.500234 725.880333 399.976418 725.880333 399.322683 738.275031 287.901698 634.591057 307.078375 634.591057 307.078375 625.375196 307.078375 618.005821 314.523763 618.005821 323.814258 618.005821 332.961016 625.375196 340.41055 634.591057 340.41055 709.072579 323.96629 692.622792 398.438139 692.622792 398.438139 692.622792 407.652616 700.138668 415.033047 709.36973 415.033047"  ></path>' +
    '' +
    '<path d="M697.287389 220.540769C661.434259 212.144495 624.570811 219.39086 614.221626 221.365885 613.432446 221.447429 612.676433 222.192382 611.953595 222.34856 611.591482 222.413519 611.370347 222.781158 611.370347 222.781158 601.177339 225.658696 593.743007 235.095694 593.743007 246.234061 593.743007 259.503631 604.502677 270.420861 617.924278 270.420861 617.924278 270.420861 630.983769 268.671119 639.822316 265.204805 648.595905 261.679061 722.856289 262.576045 759.730794 324.516367 779.862505 369.715276 768.584545 399.976418 767.185857 404.840038 767.185857 404.840038 762.392725 416.578236 762.392725 428.147821 762.392725 441.498935 773.152395 449.888299 786.497982 449.888299 797.636347 449.888299 807.008388 448.355546 809.735277 429.507809L809.874868 429.507809C849.47488 297.533573 761.430782 235.522764 697.287389 220.540769"  ></path>' +
    '' +
    '<path d="M511.996538 1.348548C238.349895 1.348548 16.493931 223.19896 16.493931 496.808131 16.493931 770.508899 238.345732 992.31629 511.996538 992.31629 785.654285 992.31629 1007.506085 770.508899 1007.506085 496.808131 1007.506085 223.19896 785.654285 1.348548 511.996538 1.348548M511.240469 27.88708C769.41386 27.88708 979.454028 237.884289 979.454028 496.052135 979.454028 754.268484 769.41386 964.292023 511.240469 964.292023 253.029665 964.292023 42.989498 754.268484 42.989498 496.052135 42.989498 237.884289 253.029665 27.88708 511.240469 27.88708"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)