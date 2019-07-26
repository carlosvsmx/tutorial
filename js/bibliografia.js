// JavaScript Document

//Aviso Revisar contenido inferior &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Diseno y programacion por Ricardo Mora y Carlos Vega



/* ---------------------- REFERENCIAS BIBLIOGRÁFICAS - INICIA ---------------------- */

var B1="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>1</button>"
		
var B2="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 02 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>2</button>"

var B3="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 03 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>3</button>"

var B4="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 04 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>4</button>"

var B5="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 05 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>5</button>"

var B6="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>6</button>"

var B7="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 07 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>7</button>"

var B8="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 08 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>8</button>"

var B9="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 09 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>9</button>"

var B10="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>10</button>"

var B11="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 11 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>11</button>"

var B12="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 12 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>12</button>"

var B13="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 13 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>13</button>"

var B14="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 14 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>14</button>"

var B15="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 15 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>15</button>"

var B16="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>16</button>"

var B17="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 17 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>17</button>"

var B18="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 18 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>18</button>"

var B19="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 19 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>19</button>"

var B20="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 20 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>20</button>"

var B21="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 21 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>21</button>"

var B22="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 22 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>22</button>"

var B23="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 23 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>23</button>"

var B24="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>24</button>"

var B25="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 25 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>25</button>"

var B26="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 26 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>26</button>"

var B27="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 27 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>27</button>"

var B28="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>28</button>"

var B29="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 29 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>29</button>"

var B30="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 30 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>30</button>"

var B31="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 31 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>31</button>"

var B32="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 32 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>32</button>"

var B33="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 33 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>33</button>"

var B34="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 34 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>34</button>"

var B35="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 35 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>35</button>"

var B36="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 36 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>36</button>"

var B37="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 37 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>37</button>"

var B38="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 38 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>38</button>"

var B39="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 39 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>39</button>"

var B40="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 40 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>40</button>"

var B41="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 41 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>41</button>"

var B42="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 42 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>42</button>"

var B43="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 43 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>43</button>"

var B44="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 44 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>44</button>"

var B45="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 45 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>45</button>"

var B46="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 46 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>46</button>"

var B47="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 47 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>47</button>"

var B48="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 48 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>48</button>"

var B49="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 49 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>49</button>"

var B50="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 50 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>50</button>"

var B51="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 51 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>51</button>"

var B52="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 52 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>52</button>"

var B53="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 53 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>53</button>"

var B54="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 54 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>54</button>"

var B55="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 55 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>55</button>"

var B56="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 56 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>56</button>"

var B57="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 57 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>57</button>"

var B58="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 58 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>58</button>"

var B59="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 59 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>59</button>"

var B60="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 60 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>60</button>"

var B61="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 61 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>61</button>"

var B62="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 62 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>62</button>"

var B63="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 63 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>63</button>"

var B64="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 64 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>64</button>"

var B65="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 65 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>65</button>"

var B66="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 66 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>66</button>"

var B67="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 67 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>67</button>"

var B68="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 68 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>68</button>"

var B69="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 69 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>69</button>"

var B70="<button type='button' class='btn btn-danger referencia' data-container='body' data-toggle='popover' data-placement='auto' data-content='Bibliografía 70 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus turpis. Morbi porta, est sit amet hendrerit sollicitudin, tellus lacus efficitur nulla, ac tempor lacus ex id urna. Nam egestas orci velit, in consequat velit malesuada id. Fusce non congue mauris. Aenean aliquam ex in consectetur maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'>70</button>"

/*Duplicar  para cada una de las referencias, cambiar el numro B1 a B2 y el numero 1 al 2 al final */	

var BB1 = document.getElementsByClassName("Biblio1");
	if( BB1[0]){ BB1[0].innerHTML = B1; } ;
	if( BB1[1]){ BB1[1].innerHTML = B1; } ;
	if( BB1[2]){ BB1[2].innerHTML = B1; } ;
	if( BB1[3]){ BB1[3].innerHTML = B1; } ;
	if( BB1[4]){ BB1[4].innerHTML = B1; } ;
	if( BB1[5]){ BB1[5].innerHTML = B1; } ;
	if( BB1[6]){ BB1[6].innerHTML = B1; } ;
	if( BB1[7]){ BB1[7].innerHTML = B1; } ;
	if( BB1[8]){ BB1[8].innerHTML = B1; } ;
	if( BB1[9]){ BB1[9].innerHTML = B1; } ;
	if( BB1[10]){ BB1[10].innerHTML = B1; } ;
	if( BB1[11]){ BB1[11].innerHTML = B1; } ;
	if( BB1[12]){ BB1[12].innerHTML = B1; } ;
	if( BB1[13]){ BB1[13].innerHTML = B1; } ;
	if( BB1[14]){ BB1[14].innerHTML = B1; } ;
	if( BB1[15]){ BB1[15].innerHTML = B1; } ;
	if( BB1[16]){ BB1[16].innerHTML = B1; } ;
	if( BB1[17]){ BB1[17].innerHTML = B1; } ;
	if( BB1[18]){ BB1[18].innerHTML = B1; } ;
	if( BB1[19]){ BB1[19].innerHTML = B1; } ;
	if( BB1[20]){ BB1[20].innerHTML = B1; } ;
	
	
var BB2 = document.getElementsByClassName("Biblio2");
	if( BB2[0]){ BB2[0].innerHTML = B2; } ;
	if( BB2[1]){ BB2[1].innerHTML = B2; } ;
	if( BB2[2]){ BB2[2].innerHTML = B2; } ;
	if( BB2[3]){ BB2[3].innerHTML = B2; } ;
	if( BB2[4]){ BB2[4].innerHTML = B2; } ;
	if( BB2[5]){ BB2[5].innerHTML = B2; } ;
	if( BB2[6]){ BB2[6].innerHTML = B2; } ;
	if( BB2[7]){ BB2[7].innerHTML = B2; } ;
	if( BB2[8]){ BB2[8].innerHTML = B2; } ;
	if( BB2[9]){ BB2[9].innerHTML = B2; } ;
	if( BB2[10]){ BB2[10].innerHTML = B2; } ;
	if( BB2[11]){ BB2[11].innerHTML = B2; } ;
	if( BB2[12]){ BB2[12].innerHTML = B2; } ;
	if( BB2[13]){ BB2[13].innerHTML = B2; } ;
	if( BB2[14]){ BB2[14].innerHTML = B2; } ;
	if( BB2[15]){ BB2[15].innerHTML = B2; } ;
	if( BB2[16]){ BB2[16].innerHTML = B2; } ;
	if( BB2[17]){ BB2[17].innerHTML = B2; } ;
	if( BB2[18]){ BB2[18].innerHTML = B2; } ;
	if( BB2[19]){ BB2[19].innerHTML = B2; } ;
	if( BB2[20]){ BB2[20].innerHTML = B2; } ;
	
var BB3 = document.getElementsByClassName("Biblio3");
	if( BB3[0]){ BB3[0].innerHTML = B3; } ;
	if( BB3[1]){ BB3[1].innerHTML = B3; } ;
	if( BB3[2]){ BB3[2].innerHTML = B3; } ;
	if( BB3[3]){ BB3[3].innerHTML = B3; } ;
	if( BB3[4]){ BB3[4].innerHTML = B3; } ;
	if( BB3[5]){ BB3[5].innerHTML = B3; } ;
	if( BB3[6]){ BB3[6].innerHTML = B3; } ;
	if( BB3[7]){ BB3[7].innerHTML = B3; } ;
	if( BB3[8]){ BB3[8].innerHTML = B3; } ;
	if( BB3[9]){ BB3[9].innerHTML = B3; } ;
	if( BB3[10]){ BB3[10].innerHTML = B3; } ;
	if( BB3[11]){ BB3[11].innerHTML = B3; } ;
	if( BB3[12]){ BB3[12].innerHTML = B3; } ;
	if( BB3[13]){ BB3[13].innerHTML = B3; } ;
	if( BB3[14]){ BB3[14].innerHTML = B3; } ;
	if( BB3[15]){ BB3[15].innerHTML = B3; } ;
	if( BB3[16]){ BB3[16].innerHTML = B3; } ;
	if( BB3[17]){ BB3[17].innerHTML = B3; } ;
	if( BB3[18]){ BB3[18].innerHTML = B3; } ;
	if( BB3[19]){ BB3[19].innerHTML = B3; } ;
	if( BB3[20]){ BB3[20].innerHTML = B3; } ;	
	
var BB4 = document.getElementsByClassName("Biblio4");
	if( BB4[0]){ BB4[0].innerHTML = B4; } ;
	if( BB4[1]){ BB4[1].innerHTML = B4; } ;
	if( BB4[2]){ BB4[2].innerHTML = B4; } ;
	if( BB4[3]){ BB4[3].innerHTML = B4; } ;
	if( BB4[4]){ BB4[4].innerHTML = B4; } ;
	if( BB4[5]){ BB4[5].innerHTML = B4; } ;
	if( BB4[6]){ BB4[6].innerHTML = B4; } ;
	if( BB4[7]){ BB4[7].innerHTML = B4; } ;
	if( BB4[8]){ BB4[8].innerHTML = B4; } ;
	if( BB4[9]){ BB4[9].innerHTML = B4; } ;
	if( BB4[10]){ BB4[10].innerHTML = B4; } ;
	if( BB4[11]){ BB4[11].innerHTML = B4; } ;
	if( BB4[12]){ BB4[12].innerHTML = B4; } ;
	if( BB4[13]){ BB4[13].innerHTML = B4; } ;
	if( BB4[14]){ BB4[14].innerHTML = B4; } ;
	if( BB4[15]){ BB4[15].innerHTML = B4; } ;
	if( BB4[16]){ BB4[16].innerHTML = B4; } ;
	if( BB4[17]){ BB4[17].innerHTML = B4; } ;
	if( BB4[18]){ BB4[18].innerHTML = B4; } ;
	if( BB4[19]){ BB4[19].innerHTML = B4; } ;
	if( BB4[20]){ BB4[20].innerHTML = B4; } ;	
	
var BB5 = document.getElementsByClassName("Biblio5");
	if( BB5[0]){ BB5[0].innerHTML = B5; } ;
	if( BB5[1]){ BB5[1].innerHTML = B5; } ;
	if( BB5[2]){ BB5[2].innerHTML = B5; } ;
	if( BB5[3]){ BB5[3].innerHTML = B5; } ;
	if( BB5[4]){ BB5[4].innerHTML = B5; } ;
	if( BB5[5]){ BB5[5].innerHTML = B5; } ;
	if( BB5[6]){ BB5[6].innerHTML = B5; } ;
	if( BB5[7]){ BB5[7].innerHTML = B5; } ;
	if( BB5[8]){ BB5[8].innerHTML = B5; } ;
	if( BB5[9]){ BB5[9].innerHTML = B5; } ;
	if( BB5[10]){ BB5[10].innerHTML = B5; } ;
	if( BB5[11]){ BB5[11].innerHTML = B5; } ;
	if( BB5[12]){ BB5[12].innerHTML = B5; } ;
	if( BB5[13]){ BB5[13].innerHTML = B5; } ;
	if( BB5[14]){ BB5[14].innerHTML = B5; } ;
	if( BB5[15]){ BB5[15].innerHTML = B5; } ;
	if( BB5[16]){ BB5[16].innerHTML = B5; } ;
	if( BB5[17]){ BB5[17].innerHTML = B5; } ;
	if( BB5[18]){ BB5[18].innerHTML = B5; } ;
	if( BB5[19]){ BB5[19].innerHTML = B5; } ;
	if( BB5[20]){ BB5[20].innerHTML = B5; } ;	

var BB6 = document.getElementsByClassName("Biblio6");
	if( BB6[0]){ BB6[0].innerHTML = B6; } ;
	if( BB6[1]){ BB6[1].innerHTML = B6; } ;
	if( BB6[2]){ BB6[2].innerHTML = B6; } ;
	if( BB6[3]){ BB6[3].innerHTML = B6; } ;
	if( BB6[4]){ BB6[4].innerHTML = B6; } ;
	if( BB6[5]){ BB6[5].innerHTML = B6; } ;
	if( BB6[6]){ BB6[6].innerHTML = B6; } ;
	if( BB6[7]){ BB6[7].innerHTML = B6; } ;
	if( BB6[8]){ BB6[8].innerHTML = B6; } ;
	if( BB6[9]){ BB6[9].innerHTML = B6; } ;
	if( BB6[10]){ BB6[10].innerHTML = B6; } ;
	if( BB6[11]){ BB6[11].innerHTML = B6; } ;
	if( BB6[12]){ BB6[12].innerHTML = B6; } ;
	if( BB6[13]){ BB6[13].innerHTML = B6; } ;
	if( BB6[14]){ BB6[14].innerHTML = B6; } ;
	if( BB6[15]){ BB6[15].innerHTML = B6; } ;
	if( BB6[16]){ BB6[16].innerHTML = B6; } ;
	if( BB6[17]){ BB6[17].innerHTML = B6; } ;
	if( BB6[18]){ BB6[18].innerHTML = B6; } ;
	if( BB6[19]){ BB6[19].innerHTML = B6; } ;
	if( BB6[20]){ BB6[20].innerHTML = B6; } ;

var BB7 = document.getElementsByClassName("Biblio7");
	if( BB7[0]){ BB7[0].innerHTML = B7; } ;
	if( BB7[1]){ BB7[1].innerHTML = B7; } ;
	if( BB7[2]){ BB7[2].innerHTML = B7; } ;
	if( BB7[3]){ BB7[3].innerHTML = B7; } ;
	if( BB7[4]){ BB7[4].innerHTML = B7; } ;
	if( BB7[5]){ BB7[5].innerHTML = B7; } ;
	if( BB7[6]){ BB7[6].innerHTML = B7; } ;
	if( BB7[7]){ BB7[7].innerHTML = B7; } ;
	if( BB7[8]){ BB7[8].innerHTML = B7; } ;
	if( BB7[9]){ BB7[9].innerHTML = B7; } ;
	if( BB7[10]){ BB7[10].innerHTML = B7; } ;
	if( BB7[11]){ BB7[11].innerHTML = B7; } ;
	if( BB7[12]){ BB7[12].innerHTML = B7; } ;
	if( BB7[13]){ BB7[13].innerHTML = B7; } ;
	if( BB7[14]){ BB7[14].innerHTML = B7; } ;
	if( BB7[15]){ BB7[15].innerHTML = B7; } ;
	if( BB7[16]){ BB7[16].innerHTML = B7; } ;
	if( BB7[17]){ BB7[17].innerHTML = B7; } ;
	if( BB7[18]){ BB7[18].innerHTML = B7; } ;
	if( BB7[19]){ BB7[19].innerHTML = B7; } ;
	if( BB7[20]){ BB7[20].innerHTML = B7; } ;
	
var BB8 = document.getElementsByClassName("Biblio8");
	if( BB8[0]){ BB8[0].innerHTML = B8; } ;
	if( BB8[1]){ BB8[1].innerHTML = B8; } ;
	if( BB8[2]){ BB8[2].innerHTML = B8; } ;
	if( BB8[3]){ BB8[3].innerHTML = B8; } ;
	if( BB8[4]){ BB8[4].innerHTML = B8; } ;
	if( BB8[5]){ BB8[5].innerHTML = B8; } ;
	if( BB8[6]){ BB8[6].innerHTML = B8; } ;
	if( BB8[7]){ BB8[7].innerHTML = B8; } ;
	if( BB8[8]){ BB8[8].innerHTML = B8; } ;
	if( BB8[9]){ BB8[9].innerHTML = B8; } ;
	if( BB8[10]){ BB8[10].innerHTML = B8; } ;
	if( BB8[11]){ BB8[11].innerHTML = B8; } ;
	if( BB8[12]){ BB8[12].innerHTML = B8; } ;
	if( BB8[13]){ BB8[13].innerHTML = B8; } ;
	if( BB8[14]){ BB8[14].innerHTML = B8; } ;
	if( BB8[15]){ BB8[15].innerHTML = B8; } ;
	if( BB8[16]){ BB8[16].innerHTML = B8; } ;
	if( BB8[17]){ BB8[17].innerHTML = B8; } ;
	if( BB8[18]){ BB8[18].innerHTML = B8; } ;
	if( BB8[19]){ BB8[19].innerHTML = B8; } ;
	if( BB8[20]){ BB8[20].innerHTML = B8; } ;

var BB9 = document.getElementsByClassName("Biblio9");
	if( BB9[0]){ BB9[0].innerHTML = B9; } ;
	if( BB9[1]){ BB9[1].innerHTML = B9; } ;
	if( BB9[2]){ BB9[2].innerHTML = B9; } ;
	if( BB9[3]){ BB9[3].innerHTML = B9; } ;
	if( BB9[4]){ BB9[4].innerHTML = B9; } ;
	if( BB9[5]){ BB9[5].innerHTML = B9; } ;
	if( BB9[6]){ BB9[6].innerHTML = B9; } ;
	if( BB9[7]){ BB9[7].innerHTML = B9; } ;
	if( BB9[8]){ BB9[8].innerHTML = B9; } ;
	if( BB9[9]){ BB9[9].innerHTML = B9; } ;
	if( BB9[10]){ BB9[10].innerHTML = B9; } ;
	if( BB9[11]){ BB9[11].innerHTML = B9; } ;
	if( BB9[12]){ BB9[12].innerHTML = B9; } ;
	if( BB9[13]){ BB9[13].innerHTML = B9; } ;
	if( BB9[14]){ BB9[14].innerHTML = B9; } ;
	if( BB9[15]){ BB9[15].innerHTML = B9; } ;
	if( BB9[16]){ BB9[16].innerHTML = B9; } ;
	if( BB9[17]){ BB9[17].innerHTML = B9; } ;
	if( BB9[18]){ BB9[18].innerHTML = B9; } ;
	if( BB9[19]){ BB9[19].innerHTML = B9; } ;
	if( BB9[20]){ BB9[20].innerHTML = B9; } ;

var BB10 = document.getElementsByClassName("Biblio10");
	if( BB10[0]){ BB10[0].innerHTML = B10; } ;
	if( BB10[1]){ BB10[1].innerHTML = B10; } ;
	if( BB10[2]){ BB10[2].innerHTML = B10; } ;
	if( BB10[3]){ BB10[3].innerHTML = B10; } ;
	if( BB10[4]){ BB10[4].innerHTML = B10; } ;
	if( BB10[5]){ BB10[5].innerHTML = B10; } ;
	if( BB10[6]){ BB10[6].innerHTML = B10; } ;
	if( BB10[7]){ BB10[7].innerHTML = B10; } ;
	if( BB10[8]){ BB10[8].innerHTML = B10; } ;
	if( BB10[9]){ BB10[9].innerHTML = B10; } ;
	if( BB10[10]){ BB10[10].innerHTML = B10; } ;
	if( BB10[11]){ BB10[11].innerHTML = B10; } ;
	if( BB10[12]){ BB10[12].innerHTML = B10; } ;
	if( BB10[13]){ BB10[13].innerHTML = B10; } ;
	if( BB10[14]){ BB10[14].innerHTML = B10; } ;
	if( BB10[15]){ BB10[15].innerHTML = B10; } ;
	if( BB10[16]){ BB10[16].innerHTML = B10; } ;
	if( BB10[17]){ BB10[17].innerHTML = B10; } ;
	if( BB10[18]){ BB10[18].innerHTML = B10; } ;
	if( BB10[19]){ BB10[19].innerHTML = B10; } ;
	if( BB10[20]){ BB10[20].innerHTML = B10; } ;	
	
var BB11 = document.getElementsByClassName("Biblio11");
	if( BB11[0]){ BB11[0].innerHTML = B11; } ;
	if( BB11[1]){ BB11[1].innerHTML = B11; } ;
	if( BB11[2]){ BB11[2].innerHTML = B11; } ;
	if( BB11[3]){ BB11[3].innerHTML = B11; } ;
	if( BB11[4]){ BB11[4].innerHTML = B11; } ;
	if( BB11[5]){ BB11[5].innerHTML = B11; } ;
	if( BB11[6]){ BB11[6].innerHTML = B11; } ;
	if( BB11[7]){ BB11[7].innerHTML = B11; } ;
	if( BB11[8]){ BB11[8].innerHTML = B11; } ;
	if( BB11[9]){ BB11[9].innerHTML = B11; } ;
	if( BB11[10]){ BB11[10].innerHTML = B11; } ;
	if( BB11[11]){ BB11[11].innerHTML = B11; } ;
	if( BB11[12]){ BB11[12].innerHTML = B11; } ;
	if( BB11[13]){ BB11[13].innerHTML = B11; } ;
	if( BB11[14]){ BB11[14].innerHTML = B11; } ;
	if( BB11[15]){ BB11[15].innerHTML = B11; } ;
	if( BB11[16]){ BB11[16].innerHTML = B11; } ;
	if( BB11[17]){ BB11[17].innerHTML = B11; } ;
	if( BB11[18]){ BB11[18].innerHTML = B11; } ;
	if( BB11[19]){ BB11[19].innerHTML = B11; } ;
	if( BB11[20]){ BB11[20].innerHTML = B11; } ;

var BB12 = document.getElementsByClassName("Biblio12");
	if( BB12[0]){ BB12[0].innerHTML = B12; } ;
	if( BB12[1]){ BB12[1].innerHTML = B12; } ;
	if( BB12[2]){ BB12[2].innerHTML = B12; } ;
	if( BB12[3]){ BB12[3].innerHTML = B12; } ;
	if( BB12[4]){ BB12[4].innerHTML = B12; } ;
	if( BB12[5]){ BB12[5].innerHTML = B12; } ;
	if( BB12[6]){ BB12[6].innerHTML = B12; } ;
	if( BB12[7]){ BB12[7].innerHTML = B12; } ;
	if( BB12[8]){ BB12[8].innerHTML = B12; } ;
	if( BB12[9]){ BB12[9].innerHTML = B12; } ;
	if( BB12[10]){ BB12[10].innerHTML = B12; } ;
	if( BB12[11]){ BB12[11].innerHTML = B12; } ;
	if( BB12[12]){ BB12[12].innerHTML = B12; } ;
	if( BB12[13]){ BB12[13].innerHTML = B12; } ;
	if( BB12[14]){ BB12[14].innerHTML = B12; } ;
	if( BB12[15]){ BB12[15].innerHTML = B12; } ;
	if( BB12[16]){ BB12[16].innerHTML = B12; } ;
	if( BB12[17]){ BB12[17].innerHTML = B12; } ;
	if( BB12[18]){ BB12[18].innerHTML = B12; } ;
	if( BB12[19]){ BB12[19].innerHTML = B12; } ;
	if( BB12[20]){ BB12[20].innerHTML = B12; } ;
	
var BB13 = document.getElementsByClassName("Biblio13");
	if( BB13[0]){ BB13[0].innerHTML = B13; } ;
	if( BB13[1]){ BB13[1].innerHTML = B13; } ;
	if( BB13[2]){ BB13[2].innerHTML = B13; } ;
	if( BB13[3]){ BB13[3].innerHTML = B13; } ;
	if( BB13[4]){ BB13[4].innerHTML = B13; } ;
	if( BB13[5]){ BB13[5].innerHTML = B13; } ;
	if( BB13[6]){ BB13[6].innerHTML = B13; } ;
	if( BB13[7]){ BB13[7].innerHTML = B13; } ;
	if( BB13[8]){ BB13[8].innerHTML = B13; } ;
	if( BB13[9]){ BB13[9].innerHTML = B13; } ;
	if( BB13[10]){ BB13[10].innerHTML = B13; } ;
	if( BB13[11]){ BB13[11].innerHTML = B13; } ;
	if( BB13[12]){ BB13[12].innerHTML = B13; } ;
	if( BB13[13]){ BB13[13].innerHTML = B13; } ;
	if( BB13[14]){ BB13[14].innerHTML = B13; } ;
	if( BB13[15]){ BB13[15].innerHTML = B13; } ;
	if( BB13[16]){ BB13[16].innerHTML = B13; } ;
	if( BB13[17]){ BB13[17].innerHTML = B13; } ;
	if( BB13[18]){ BB13[18].innerHTML = B13; } ;
	if( BB13[19]){ BB13[19].innerHTML = B13; } ;
	if( BB13[20]){ BB13[20].innerHTML = B13; } ;	
		
var BB14 = document.getElementsByClassName("Biblio14");
	if( BB14[0]){ BB14[0].innerHTML = B14; } ;
	if( BB14[1]){ BB14[1].innerHTML = B14; } ;
	if( BB14[2]){ BB14[2].innerHTML = B14; } ;
	if( BB14[3]){ BB14[3].innerHTML = B14; } ;
	if( BB14[4]){ BB14[4].innerHTML = B14; } ;
	if( BB14[5]){ BB14[5].innerHTML = B14; } ;
	if( BB14[6]){ BB14[6].innerHTML = B14; } ;
	if( BB14[7]){ BB14[7].innerHTML = B14; } ;
	if( BB14[8]){ BB14[8].innerHTML = B14; } ;
	if( BB14[9]){ BB14[9].innerHTML = B14; } ;
	if( BB14[10]){ BB14[10].innerHTML = B14; } ;
	if( BB14[11]){ BB14[11].innerHTML = B14; } ;
	if( BB14[12]){ BB14[12].innerHTML = B14; } ;
	if( BB14[13]){ BB14[13].innerHTML = B14; } ;
	if( BB14[14]){ BB14[14].innerHTML = B14; } ;
	if( BB14[15]){ BB14[15].innerHTML = B14; } ;
	if( BB14[16]){ BB14[16].innerHTML = B14; } ;
	if( BB14[17]){ BB14[17].innerHTML = B14; } ;
	if( BB14[18]){ BB14[18].innerHTML = B14; } ;
	if( BB14[19]){ BB14[19].innerHTML = B14; } ;
	if( BB14[20]){ BB14[20].innerHTML = B14; } ;

var BB15 = document.getElementsByClassName("Biblio15");
	if( BB15[0]){ BB15[0].innerHTML = B15; } ;
	if( BB15[1]){ BB15[1].innerHTML = B15; } ;
	if( BB15[2]){ BB15[2].innerHTML = B15; } ;
	if( BB15[3]){ BB15[3].innerHTML = B15; } ;
	if( BB15[4]){ BB15[4].innerHTML = B15; } ;
	if( BB15[5]){ BB15[5].innerHTML = B15; } ;
	if( BB15[6]){ BB15[6].innerHTML = B15; } ;
	if( BB15[7]){ BB15[7].innerHTML = B15; } ;
	if( BB15[8]){ BB15[8].innerHTML = B15; } ;
	if( BB15[9]){ BB15[9].innerHTML = B15; } ;
	if( BB15[10]){ BB15[10].innerHTML = B15; } ;
	if( BB15[11]){ BB15[11].innerHTML = B15; } ;
	if( BB15[12]){ BB15[12].innerHTML = B15; } ;
	if( BB15[13]){ BB15[13].innerHTML = B15; } ;
	if( BB15[14]){ BB15[14].innerHTML = B15; } ;
	if( BB15[15]){ BB15[15].innerHTML = B15; } ;
	if( BB15[16]){ BB15[16].innerHTML = B15; } ;
	if( BB15[17]){ BB15[17].innerHTML = B15; } ;
	if( BB15[18]){ BB15[18].innerHTML = B15; } ;
	if( BB15[19]){ BB15[19].innerHTML = B15; } ;
	if( BB15[20]){ BB15[20].innerHTML = B15; } ;
	
var BB16 = document.getElementsByClassName("Biblio16");
	if( BB16[0]){ BB16[0].innerHTML = B16; } ;
	if( BB16[1]){ BB16[1].innerHTML = B16; } ;
	if( BB16[2]){ BB16[2].innerHTML = B16; } ;
	if( BB16[3]){ BB16[3].innerHTML = B16; } ;
	if( BB16[4]){ BB16[4].innerHTML = B16; } ;
	if( BB16[5]){ BB16[5].innerHTML = B16; } ;
	if( BB16[6]){ BB16[6].innerHTML = B16; } ;
	if( BB16[7]){ BB16[7].innerHTML = B16; } ;
	if( BB16[8]){ BB16[8].innerHTML = B16; } ;
	if( BB16[9]){ BB16[9].innerHTML = B16; } ;
	if( BB16[10]){ BB16[10].innerHTML = B16; } ;
	if( BB16[11]){ BB16[11].innerHTML = B16; } ;
	if( BB16[12]){ BB16[12].innerHTML = B16; } ;
	if( BB16[13]){ BB16[13].innerHTML = B16; } ;
	if( BB16[14]){ BB16[14].innerHTML = B16; } ;
	if( BB16[15]){ BB16[15].innerHTML = B16; } ;
	if( BB16[16]){ BB16[16].innerHTML = B16; } ;
	if( BB16[17]){ BB16[17].innerHTML = B16; } ;
	if( BB16[18]){ BB16[18].innerHTML = B16; } ;
	if( BB16[19]){ BB16[19].innerHTML = B16; } ;
	if( BB16[20]){ BB16[20].innerHTML = B16; } ;	
		
var BB17 = document.getElementsByClassName("Biblio17");
	if( BB17[0]){ BB17[0].innerHTML = B17; } ;
	if( BB17[1]){ BB17[1].innerHTML = B17; } ;
	if( BB17[2]){ BB17[2].innerHTML = B17; } ;
	if( BB17[3]){ BB17[3].innerHTML = B17; } ;
	if( BB17[4]){ BB17[4].innerHTML = B17; } ;
	if( BB17[5]){ BB17[5].innerHTML = B17; } ;
	if( BB17[6]){ BB17[6].innerHTML = B17; } ;
	if( BB17[7]){ BB17[7].innerHTML = B17; } ;
	if( BB17[8]){ BB17[8].innerHTML = B17; } ;
	if( BB17[9]){ BB17[9].innerHTML = B17; } ;
	if( BB17[10]){ BB17[10].innerHTML = B17; } ;
	if( BB17[11]){ BB17[11].innerHTML = B17; } ;
	if( BB17[12]){ BB17[12].innerHTML = B17; } ;
	if( BB17[13]){ BB17[13].innerHTML = B17; } ;
	if( BB17[14]){ BB17[14].innerHTML = B17; } ;
	if( BB17[15]){ BB17[15].innerHTML = B17; } ;
	if( BB17[16]){ BB17[16].innerHTML = B17; } ;
	if( BB17[17]){ BB17[17].innerHTML = B17; } ;
	if( BB17[18]){ BB17[18].innerHTML = B17; } ;
	if( BB17[19]){ BB17[19].innerHTML = B17; } ;
	if( BB17[20]){ BB17[20].innerHTML = B17; } ;

var BB18 = document.getElementsByClassName("Biblio18");
	if( BB18[0]){ BB18[0].innerHTML = B18; } ;
	if( BB18[1]){ BB18[1].innerHTML = B18; } ;
	if( BB18[2]){ BB18[2].innerHTML = B18; } ;
	if( BB18[3]){ BB18[3].innerHTML = B18; } ;
	if( BB18[4]){ BB18[4].innerHTML = B18; } ;
	if( BB18[5]){ BB18[5].innerHTML = B18; } ;
	if( BB18[6]){ BB18[6].innerHTML = B18; } ;
	if( BB18[7]){ BB18[7].innerHTML = B18; } ;
	if( BB18[8]){ BB18[8].innerHTML = B18; } ;
	if( BB18[9]){ BB18[9].innerHTML = B18; } ;
	if( BB18[10]){ BB18[10].innerHTML = B18; } ;
	if( BB18[11]){ BB18[11].innerHTML = B18; } ;
	if( BB18[12]){ BB18[12].innerHTML = B18; } ;
	if( BB18[13]){ BB18[13].innerHTML = B18; } ;
	if( BB18[14]){ BB18[14].innerHTML = B18; } ;
	if( BB18[15]){ BB18[15].innerHTML = B18; } ;
	if( BB18[16]){ BB18[16].innerHTML = B18; } ;
	if( BB18[17]){ BB18[17].innerHTML = B18; } ;
	if( BB18[18]){ BB18[18].innerHTML = B18; } ;
	if( BB18[19]){ BB18[19].innerHTML = B18; } ;
	if( BB18[20]){ BB18[20].innerHTML = B18; } ;	
	
var BB19 = document.getElementsByClassName("Biblio19");
	if( BB19[0]){ BB19[0].innerHTML = B19; } ;
	if( BB19[1]){ BB19[1].innerHTML = B19; } ;
	if( BB19[2]){ BB19[2].innerHTML = B19; } ;
	if( BB19[3]){ BB19[3].innerHTML = B19; } ;
	if( BB19[4]){ BB19[4].innerHTML = B19; } ;
	if( BB19[5]){ BB19[5].innerHTML = B19; } ;
	if( BB19[6]){ BB19[6].innerHTML = B19; } ;
	if( BB19[7]){ BB19[7].innerHTML = B19; } ;
	if( BB19[8]){ BB19[8].innerHTML = B19; } ;
	if( BB19[9]){ BB19[9].innerHTML = B19; } ;
	if( BB19[10]){ BB19[10].innerHTML = B19; } ;
	if( BB19[11]){ BB19[11].innerHTML = B19; } ;
	if( BB19[12]){ BB19[12].innerHTML = B19; } ;
	if( BB19[13]){ BB19[13].innerHTML = B19; } ;
	if( BB19[14]){ BB19[14].innerHTML = B19; } ;
	if( BB19[15]){ BB19[15].innerHTML = B19; } ;
	if( BB19[16]){ BB19[16].innerHTML = B19; } ;
	if( BB19[17]){ BB19[17].innerHTML = B19; } ;
	if( BB19[18]){ BB19[18].innerHTML = B19; } ;
	if( BB19[19]){ BB19[19].innerHTML = B19; } ;
	if( BB19[20]){ BB19[20].innerHTML = B19; } ;	
	
var BB20 = document.getElementsByClassName("Biblio20");
	if( BB20[0]){ BB20[0].innerHTML = B20; } ;
	if( BB20[1]){ BB20[1].innerHTML = B20; } ;
	if( BB20[2]){ BB20[2].innerHTML = B20; } ;
	if( BB20[3]){ BB20[3].innerHTML = B20; } ;
	if( BB20[4]){ BB20[4].innerHTML = B20; } ;
	if( BB20[5]){ BB20[5].innerHTML = B20; } ;
	if( BB20[6]){ BB20[6].innerHTML = B20; } ;
	if( BB20[7]){ BB20[7].innerHTML = B20; } ;
	if( BB20[8]){ BB20[8].innerHTML = B20; } ;
	if( BB20[9]){ BB20[9].innerHTML = B20; } ;
	if( BB20[10]){ BB20[10].innerHTML = B20; } ;
	if( BB20[11]){ BB20[11].innerHTML = B20; } ;
	if( BB20[12]){ BB20[12].innerHTML = B20; } ;
	if( BB20[13]){ BB20[13].innerHTML = B20; } ;
	if( BB20[14]){ BB20[14].innerHTML = B20; } ;
	if( BB20[15]){ BB20[15].innerHTML = B20; } ;
	if( BB20[16]){ BB20[16].innerHTML = B20; } ;
	if( BB20[17]){ BB20[17].innerHTML = B20; } ;
	if( BB20[18]){ BB20[18].innerHTML = B20; } ;
	if( BB20[19]){ BB20[19].innerHTML = B20; } ;
	if( BB20[20]){ BB20[20].innerHTML = B20; } ;	
	
var BB21 = document.getElementsByClassName("Biblio21");
	if( BB21[0]){ BB21[0].innerHTML = B21; } ;
	if( BB21[1]){ BB21[1].innerHTML = B21; } ;
	if( BB21[2]){ BB21[2].innerHTML = B21; } ;
	if( BB21[3]){ BB21[3].innerHTML = B21; } ;
	if( BB21[4]){ BB21[4].innerHTML = B21; } ;
	if( BB21[5]){ BB21[5].innerHTML = B21; } ;
	if( BB21[6]){ BB21[6].innerHTML = B21; } ;
	if( BB21[7]){ BB21[7].innerHTML = B21; } ;
	if( BB21[8]){ BB21[8].innerHTML = B21; } ;
	if( BB21[9]){ BB21[9].innerHTML = B21; } ;
	if( BB21[10]){ BB21[10].innerHTML = B21; } ;
	if( BB21[11]){ BB21[11].innerHTML = B21; } ;
	if( BB21[12]){ BB21[12].innerHTML = B21; } ;
	if( BB21[13]){ BB21[13].innerHTML = B21; } ;
	if( BB21[14]){ BB21[14].innerHTML = B21; } ;
	if( BB21[15]){ BB21[15].innerHTML = B21; } ;
	if( BB21[16]){ BB21[16].innerHTML = B21; } ;
	if( BB21[17]){ BB21[17].innerHTML = B21; } ;
	if( BB21[18]){ BB21[18].innerHTML = B21; } ;
	if( BB21[19]){ BB21[19].innerHTML = B21; } ;
	if( BB21[20]){ BB21[20].innerHTML = B21; } ;

var BB22 = document.getElementsByClassName("Biblio22");
	if( BB22[0]){ BB22[0].innerHTML = B22; } ;
	if( BB22[1]){ BB22[1].innerHTML = B22; } ;
	if( BB22[2]){ BB22[2].innerHTML = B22; } ;
	if( BB22[3]){ BB22[3].innerHTML = B22; } ;
	if( BB22[4]){ BB22[4].innerHTML = B22; } ;
	if( BB22[5]){ BB22[5].innerHTML = B22; } ;
	if( BB22[6]){ BB22[6].innerHTML = B22; } ;
	if( BB22[7]){ BB22[7].innerHTML = B22; } ;
	if( BB22[8]){ BB22[8].innerHTML = B22; } ;
	if( BB22[9]){ BB22[9].innerHTML = B22; } ;
	if( BB22[10]){ BB22[10].innerHTML = B22; } ;
	if( BB22[11]){ BB22[11].innerHTML = B22; } ;
	if( BB22[12]){ BB22[12].innerHTML = B22; } ;
	if( BB22[13]){ BB22[13].innerHTML = B22; } ;
	if( BB22[14]){ BB22[14].innerHTML = B22; } ;
	if( BB22[15]){ BB22[15].innerHTML = B22; } ;
	if( BB22[16]){ BB22[16].innerHTML = B22; } ;
	if( BB22[17]){ BB22[17].innerHTML = B22; } ;
	if( BB22[18]){ BB22[18].innerHTML = B22; } ;
	if( BB22[19]){ BB22[19].innerHTML = B22; } ;
	if( BB22[20]){ BB22[20].innerHTML = B22; } ;
	
var BB23 = document.getElementsByClassName("Biblio23");
	if( BB23[0]){ BB23[0].innerHTML = B23; } ;
	if( BB23[1]){ BB23[1].innerHTML = B23; } ;
	if( BB23[2]){ BB23[2].innerHTML = B23; } ;
	if( BB23[3]){ BB23[3].innerHTML = B23; } ;
	if( BB23[4]){ BB23[4].innerHTML = B23; } ;
	if( BB23[5]){ BB23[5].innerHTML = B23; } ;
	if( BB23[6]){ BB23[6].innerHTML = B23; } ;
	if( BB23[7]){ BB23[7].innerHTML = B23; } ;
	if( BB23[8]){ BB23[8].innerHTML = B23; } ;
	if( BB23[9]){ BB23[9].innerHTML = B23; } ;
	if( BB23[10]){ BB23[10].innerHTML = B23; } ;
	if( BB23[11]){ BB23[11].innerHTML = B23; } ;
	if( BB23[12]){ BB23[12].innerHTML = B23; } ;
	if( BB23[13]){ BB23[13].innerHTML = B23; } ;
	if( BB23[14]){ BB23[14].innerHTML = B23; } ;
	if( BB23[15]){ BB23[15].innerHTML = B23; } ;
	if( BB23[16]){ BB23[16].innerHTML = B23; } ;
	if( BB23[17]){ BB23[17].innerHTML = B23; } ;
	if( BB23[18]){ BB23[18].innerHTML = B23; } ;
	if( BB23[19]){ BB23[19].innerHTML = B23; } ;
	if( BB23[20]){ BB23[20].innerHTML = B23; } ;
	
var BB24 = document.getElementsByClassName("Biblio24");
	if( BB24[0]){ BB24[0].innerHTML = B24; } ;
	if( BB24[1]){ BB24[1].innerHTML = B24; } ;
	if( BB24[2]){ BB24[2].innerHTML = B24; } ;
	if( BB24[3]){ BB24[3].innerHTML = B24; } ;
	if( BB24[4]){ BB24[4].innerHTML = B24; } ;
	if( BB24[5]){ BB24[5].innerHTML = B24; } ;
	if( BB24[6]){ BB24[6].innerHTML = B24; } ;
	if( BB24[7]){ BB24[7].innerHTML = B24; } ;
	if( BB24[8]){ BB24[8].innerHTML = B24; } ;
	if( BB24[9]){ BB24[9].innerHTML = B24; } ;
	if( BB24[10]){ BB24[10].innerHTML = B24; } ;
	if( BB24[11]){ BB24[11].innerHTML = B24; } ;
	if( BB24[12]){ BB24[12].innerHTML = B24; } ;
	if( BB24[13]){ BB24[13].innerHTML = B24; } ;
	if( BB24[14]){ BB24[14].innerHTML = B24; } ;
	if( BB24[15]){ BB24[15].innerHTML = B24; } ;
	if( BB24[16]){ BB24[16].innerHTML = B24; } ;
	if( BB24[17]){ BB24[17].innerHTML = B24; } ;
	if( BB24[18]){ BB24[18].innerHTML = B24; } ;
	if( BB24[19]){ BB24[19].innerHTML = B24; } ;
	if( BB24[20]){ BB24[20].innerHTML = B24; } ;

var BB25 = document.getElementsByClassName("Biblio25");
	if( BB25[0]){ BB25[0].innerHTML = B25; } ;
	if( BB25[1]){ BB25[1].innerHTML = B25; } ;
	if( BB25[2]){ BB25[2].innerHTML = B25; } ;
	if( BB25[3]){ BB25[3].innerHTML = B25; } ;
	if( BB25[4]){ BB25[4].innerHTML = B25; } ;
	if( BB25[5]){ BB25[5].innerHTML = B25; } ;
	if( BB25[6]){ BB25[6].innerHTML = B25; } ;
	if( BB25[7]){ BB25[7].innerHTML = B25; } ;
	if( BB25[8]){ BB25[8].innerHTML = B25; } ;
	if( BB25[9]){ BB25[9].innerHTML = B25; } ;
	if( BB25[10]){ BB25[10].innerHTML = B25; } ;
	if( BB25[11]){ BB25[11].innerHTML = B25; } ;
	if( BB25[12]){ BB25[12].innerHTML = B25; } ;
	if( BB25[13]){ BB25[13].innerHTML = B25; } ;
	if( BB25[14]){ BB25[14].innerHTML = B25; } ;
	if( BB25[15]){ BB25[15].innerHTML = B25; } ;
	if( BB25[16]){ BB25[16].innerHTML = B25; } ;
	if( BB25[17]){ BB25[17].innerHTML = B25; } ;
	if( BB25[18]){ BB25[18].innerHTML = B25; } ;
	if( BB25[19]){ BB25[19].innerHTML = B25; } ;
	if( BB25[20]){ BB25[20].innerHTML = B25; } ;
	
var BB26 = document.getElementsByClassName("Biblio26");
	if( BB26[0]){ BB26[0].innerHTML = B26; } ;
	if( BB26[1]){ BB26[1].innerHTML = B26; } ;
	if( BB26[2]){ BB26[2].innerHTML = B26; } ;
	if( BB26[3]){ BB26[3].innerHTML = B26; } ;
	if( BB26[4]){ BB26[4].innerHTML = B26; } ;
	if( BB26[5]){ BB26[5].innerHTML = B26; } ;
	if( BB26[6]){ BB26[6].innerHTML = B26; } ;
	if( BB26[7]){ BB26[7].innerHTML = B26; } ;
	if( BB26[8]){ BB26[8].innerHTML = B26; } ;
	if( BB26[9]){ BB26[9].innerHTML = B26; } ;
	if( BB26[10]){ BB26[10].innerHTML = B26; } ;
	if( BB26[11]){ BB26[11].innerHTML = B26; } ;
	if( BB26[12]){ BB26[12].innerHTML = B26; } ;
	if( BB26[13]){ BB26[13].innerHTML = B26; } ;
	if( BB26[14]){ BB26[14].innerHTML = B26; } ;
	if( BB26[15]){ BB26[15].innerHTML = B26; } ;
	if( BB26[16]){ BB26[16].innerHTML = B26; } ;
	if( BB26[17]){ BB26[17].innerHTML = B26; } ;
	if( BB26[18]){ BB26[18].innerHTML = B26; } ;
	if( BB26[19]){ BB26[19].innerHTML = B26; } ;
	if( BB26[20]){ BB26[20].innerHTML = B26; } ;
	
var BB27 = document.getElementsByClassName("Biblio27");
	if( BB27[0]){ BB27[0].innerHTML = B27; } ;
	if( BB27[1]){ BB27[1].innerHTML = B27; } ;
	if( BB27[2]){ BB27[2].innerHTML = B27; } ;
	if( BB27[3]){ BB27[3].innerHTML = B27; } ;
	if( BB27[4]){ BB27[4].innerHTML = B27; } ;
	if( BB27[5]){ BB27[5].innerHTML = B27; } ;
	if( BB27[6]){ BB27[6].innerHTML = B27; } ;
	if( BB27[7]){ BB27[7].innerHTML = B27; } ;
	if( BB27[8]){ BB27[8].innerHTML = B27; } ;
	if( BB27[9]){ BB27[9].innerHTML = B27; } ;
	if( BB27[10]){ BB27[10].innerHTML = B27; } ;
	if( BB27[11]){ BB27[11].innerHTML = B27; } ;
	if( BB27[12]){ BB27[12].innerHTML = B27; } ;
	if( BB27[13]){ BB27[13].innerHTML = B27; } ;
	if( BB27[14]){ BB27[14].innerHTML = B27; } ;
	if( BB27[15]){ BB27[15].innerHTML = B27; } ;
	if( BB27[16]){ BB27[16].innerHTML = B27; } ;
	if( BB27[17]){ BB27[17].innerHTML = B27; } ;
	if( BB27[18]){ BB27[18].innerHTML = B27; } ;
	if( BB27[19]){ BB27[19].innerHTML = B27; } ;
	if( BB27[20]){ BB27[20].innerHTML = B27; } ;
	
var BB28 = document.getElementsByClassName("Biblio28");
	if( BB28[0]){ BB28[0].innerHTML = B28; } ;
	if( BB28[1]){ BB28[1].innerHTML = B28; } ;
	if( BB28[2]){ BB28[2].innerHTML = B28; } ;
	if( BB28[3]){ BB28[3].innerHTML = B28; } ;
	if( BB28[4]){ BB28[4].innerHTML = B28; } ;
	if( BB28[5]){ BB28[5].innerHTML = B28; } ;
	if( BB28[6]){ BB28[6].innerHTML = B28; } ;
	if( BB28[7]){ BB28[7].innerHTML = B28; } ;
	if( BB28[8]){ BB28[8].innerHTML = B28; } ;
	if( BB28[9]){ BB28[9].innerHTML = B28; } ;
	if( BB28[10]){ BB28[10].innerHTML = B28; } ;
	if( BB28[11]){ BB28[11].innerHTML = B28; } ;
	if( BB28[12]){ BB28[12].innerHTML = B28; } ;
	if( BB28[13]){ BB28[13].innerHTML = B28; } ;
	if( BB28[14]){ BB28[14].innerHTML = B28; } ;
	if( BB28[15]){ BB28[15].innerHTML = B28; } ;
	if( BB28[16]){ BB28[16].innerHTML = B28; } ;
	if( BB28[17]){ BB28[17].innerHTML = B28; } ;
	if( BB28[18]){ BB28[18].innerHTML = B28; } ;
	if( BB28[19]){ BB28[19].innerHTML = B28; } ;
	if( BB28[20]){ BB28[20].innerHTML = B28; } ;
	
var BB29 = document.getElementsByClassName("Biblio29");
	if( BB29[0]){ BB29[0].innerHTML = B29; } ;
	if( BB29[1]){ BB29[1].innerHTML = B29; } ;
	if( BB29[2]){ BB29[2].innerHTML = B29; } ;
	if( BB29[3]){ BB29[3].innerHTML = B29; } ;
	if( BB29[4]){ BB29[4].innerHTML = B29; } ;
	if( BB29[5]){ BB29[5].innerHTML = B29; } ;
	if( BB29[6]){ BB29[6].innerHTML = B29; } ;
	if( BB29[7]){ BB29[7].innerHTML = B29; } ;
	if( BB29[8]){ BB29[8].innerHTML = B29; } ;
	if( BB29[9]){ BB29[9].innerHTML = B29; } ;
	if( BB29[10]){ BB29[10].innerHTML = B29; } ;
	if( BB29[11]){ BB29[11].innerHTML = B29; } ;
	if( BB29[12]){ BB29[12].innerHTML = B29; } ;
	if( BB29[13]){ BB29[13].innerHTML = B29; } ;
	if( BB29[14]){ BB29[14].innerHTML = B29; } ;
	if( BB29[15]){ BB29[15].innerHTML = B29; } ;
	if( BB29[16]){ BB29[16].innerHTML = B29; } ;
	if( BB29[17]){ BB29[17].innerHTML = B29; } ;
	if( BB29[18]){ BB29[18].innerHTML = B29; } ;
	if( BB29[19]){ BB29[19].innerHTML = B29; } ;
	if( BB29[20]){ BB29[20].innerHTML = B29; } ;
	
var BB30 = document.getElementsByClassName("Biblio30");
	if( BB30[0]){ BB30[0].innerHTML = B30; } ;
	if( BB30[1]){ BB30[1].innerHTML = B30; } ;
	if( BB30[2]){ BB30[2].innerHTML = B30; } ;
	if( BB30[3]){ BB30[3].innerHTML = B30; } ;
	if( BB30[4]){ BB30[4].innerHTML = B30; } ;
	if( BB30[5]){ BB30[5].innerHTML = B30; } ;
	if( BB30[6]){ BB30[6].innerHTML = B30; } ;
	if( BB30[7]){ BB30[7].innerHTML = B30; } ;
	if( BB30[8]){ BB30[8].innerHTML = B30; } ;
	if( BB30[9]){ BB30[9].innerHTML = B30; } ;
	if( BB30[10]){ BB30[10].innerHTML = B30; } ;
	if( BB30[11]){ BB30[11].innerHTML = B30; } ;
	if( BB30[12]){ BB30[12].innerHTML = B30; } ;
	if( BB30[13]){ BB30[13].innerHTML = B30; } ;
	if( BB30[14]){ BB30[14].innerHTML = B30; } ;
	if( BB30[15]){ BB30[15].innerHTML = B30; } ;
	if( BB30[16]){ BB30[16].innerHTML = B30; } ;
	if( BB30[17]){ BB30[17].innerHTML = B30; } ;
	if( BB30[18]){ BB30[18].innerHTML = B30; } ;
	if( BB30[19]){ BB30[19].innerHTML = B30; } ;
	if( BB30[20]){ BB30[20].innerHTML = B30; } ;
	
var BB31 = document.getElementsByClassName("Biblio31");
	if( BB31[0]){ BB31[0].innerHTML = B31; } ;
	if( BB31[1]){ BB31[1].innerHTML = B31; } ;
	if( BB31[2]){ BB31[2].innerHTML = B31; } ;
	if( BB31[3]){ BB31[3].innerHTML = B31; } ;
	if( BB31[4]){ BB31[4].innerHTML = B31; } ;
	if( BB31[5]){ BB31[5].innerHTML = B31; } ;
	if( BB31[6]){ BB31[6].innerHTML = B31; } ;
	if( BB31[7]){ BB31[7].innerHTML = B31; } ;
	if( BB31[8]){ BB31[8].innerHTML = B31; } ;
	if( BB31[9]){ BB31[9].innerHTML = B31; } ;
	if( BB31[10]){ BB31[10].innerHTML = B31; } ;
	if( BB31[11]){ BB31[11].innerHTML = B31; } ;
	if( BB31[12]){ BB31[12].innerHTML = B31; } ;
	if( BB31[13]){ BB31[13].innerHTML = B31; } ;
	if( BB31[14]){ BB31[14].innerHTML = B31; } ;
	if( BB31[15]){ BB31[15].innerHTML = B31; } ;
	if( BB31[16]){ BB31[16].innerHTML = B31; } ;
	if( BB31[17]){ BB31[17].innerHTML = B31; } ;
	if( BB31[18]){ BB31[18].innerHTML = B31; } ;
	if( BB31[19]){ BB31[19].innerHTML = B31; } ;
	if( BB31[20]){ BB31[20].innerHTML = B31; } ;
	
var BB32 = document.getElementsByClassName("Biblio32");
	if( BB32[0]){ BB32[0].innerHTML = B32; } ;
	if( BB32[1]){ BB32[1].innerHTML = B32; } ;
	if( BB32[2]){ BB32[2].innerHTML = B32; } ;
	if( BB32[3]){ BB32[3].innerHTML = B32; } ;
	if( BB32[4]){ BB32[4].innerHTML = B32; } ;
	if( BB32[5]){ BB32[5].innerHTML = B32; } ;
	if( BB32[6]){ BB32[6].innerHTML = B32; } ;
	if( BB32[7]){ BB32[7].innerHTML = B32; } ;
	if( BB32[8]){ BB32[8].innerHTML = B32; } ;
	if( BB32[9]){ BB32[9].innerHTML = B32; } ;
	if( BB32[10]){ BB32[10].innerHTML = B32; } ;
	if( BB32[11]){ BB32[11].innerHTML = B32; } ;
	if( BB32[12]){ BB32[12].innerHTML = B32; } ;
	if( BB32[13]){ BB32[13].innerHTML = B32; } ;
	if( BB32[14]){ BB32[14].innerHTML = B32; } ;
	if( BB32[15]){ BB32[15].innerHTML = B32; } ;
	if( BB32[16]){ BB32[16].innerHTML = B32; } ;
	if( BB32[17]){ BB32[17].innerHTML = B32; } ;
	if( BB32[18]){ BB32[18].innerHTML = B32; } ;
	if( BB32[19]){ BB32[19].innerHTML = B32; } ;
	if( BB32[20]){ BB32[20].innerHTML = B32; } ;
	
var BB33 = document.getElementsByClassName("Biblio33");
	if( BB33[0]){ BB33[0].innerHTML = B33; } ;
	if( BB33[1]){ BB33[1].innerHTML = B33; } ;
	if( BB33[2]){ BB33[2].innerHTML = B33; } ;
	if( BB33[3]){ BB33[3].innerHTML = B33; } ;
	if( BB33[4]){ BB33[4].innerHTML = B33; } ;
	if( BB33[5]){ BB33[5].innerHTML = B33; } ;
	if( BB33[6]){ BB33[6].innerHTML = B33; } ;
	if( BB33[7]){ BB33[7].innerHTML = B33; } ;
	if( BB33[8]){ BB33[8].innerHTML = B33; } ;
	if( BB33[9]){ BB33[9].innerHTML = B33; } ;
	if( BB33[10]){ BB33[10].innerHTML = B33; } ;
	if( BB33[11]){ BB33[11].innerHTML = B33; } ;
	if( BB33[12]){ BB33[12].innerHTML = B33; } ;
	if( BB33[13]){ BB33[13].innerHTML = B33; } ;
	if( BB33[14]){ BB33[14].innerHTML = B33; } ;
	if( BB33[15]){ BB33[15].innerHTML = B33; } ;
	if( BB33[16]){ BB33[16].innerHTML = B33; } ;
	if( BB33[17]){ BB33[17].innerHTML = B33; } ;
	if( BB33[18]){ BB33[18].innerHTML = B33; } ;
	if( BB33[19]){ BB33[19].innerHTML = B33; } ;
	if( BB33[20]){ BB33[20].innerHTML = B33; } ;

var BB34 = document.getElementsByClassName("Biblio34");
	if( BB34[0]){ BB34[0].innerHTML = B34; } ;
	if( BB34[1]){ BB34[1].innerHTML = B34; } ;
	if( BB34[2]){ BB34[2].innerHTML = B34; } ;
	if( BB34[3]){ BB34[3].innerHTML = B34; } ;
	if( BB34[4]){ BB34[4].innerHTML = B34; } ;
	if( BB34[5]){ BB34[5].innerHTML = B34; } ;
	if( BB34[6]){ BB34[6].innerHTML = B34; } ;
	if( BB34[7]){ BB34[7].innerHTML = B34; } ;
	if( BB34[8]){ BB34[8].innerHTML = B34; } ;
	if( BB34[9]){ BB34[9].innerHTML = B34; } ;
	if( BB34[10]){ BB34[10].innerHTML = B34; } ;
	if( BB34[11]){ BB34[11].innerHTML = B34; } ;
	if( BB34[12]){ BB34[12].innerHTML = B34; } ;
	if( BB34[13]){ BB34[13].innerHTML = B34; } ;
	if( BB34[14]){ BB34[14].innerHTML = B34; } ;
	if( BB34[15]){ BB34[15].innerHTML = B34; } ;
	if( BB34[16]){ BB34[16].innerHTML = B34; } ;
	if( BB34[17]){ BB34[17].innerHTML = B34; } ;
	if( BB34[18]){ BB34[18].innerHTML = B34; } ;
	if( BB34[19]){ BB34[19].innerHTML = B34; } ;
	if( BB34[20]){ BB34[20].innerHTML = B34; } ;
	
var BB35 = document.getElementsByClassName("Biblio35");
	if( BB35[0]){ BB35[0].innerHTML = B35; } ;
	if( BB35[1]){ BB35[1].innerHTML = B35; } ;
	if( BB35[2]){ BB35[2].innerHTML = B35; } ;
	if( BB35[3]){ BB35[3].innerHTML = B35; } ;
	if( BB35[4]){ BB35[4].innerHTML = B35; } ;
	if( BB35[5]){ BB35[5].innerHTML = B35; } ;
	if( BB35[6]){ BB35[6].innerHTML = B35; } ;
	if( BB35[7]){ BB35[7].innerHTML = B35; } ;
	if( BB35[8]){ BB35[8].innerHTML = B35; } ;
	if( BB35[9]){ BB35[9].innerHTML = B35; } ;
	if( BB35[10]){ BB35[10].innerHTML = B35; } ;
	if( BB35[11]){ BB35[11].innerHTML = B35; } ;
	if( BB35[12]){ BB35[12].innerHTML = B35; } ;
	if( BB35[13]){ BB35[13].innerHTML = B35; } ;
	if( BB35[14]){ BB35[14].innerHTML = B35; } ;
	if( BB35[15]){ BB35[15].innerHTML = B35; } ;
	if( BB35[16]){ BB35[16].innerHTML = B35; } ;
	if( BB35[17]){ BB35[17].innerHTML = B35; } ;
	if( BB35[18]){ BB35[18].innerHTML = B35; } ;
	if( BB35[19]){ BB35[19].innerHTML = B35; } ;
	if( BB35[20]){ BB35[20].innerHTML = B35; } ;

var BB36 = document.getElementsByClassName("Biblio36");
	if( BB36[0]){ BB36[0].innerHTML = B36; } ;
	if( BB36[1]){ BB36[1].innerHTML = B36; } ;
	if( BB36[2]){ BB36[2].innerHTML = B36; } ;
	if( BB36[3]){ BB36[3].innerHTML = B36; } ;
	if( BB36[4]){ BB36[4].innerHTML = B36; } ;
	if( BB36[5]){ BB36[5].innerHTML = B36; } ;
	if( BB36[6]){ BB36[6].innerHTML = B36; } ;
	if( BB36[7]){ BB36[7].innerHTML = B36; } ;
	if( BB36[8]){ BB36[8].innerHTML = B36; } ;
	if( BB36[9]){ BB36[9].innerHTML = B36; } ;
	if( BB36[10]){ BB36[10].innerHTML = B36; } ;
	if( BB36[11]){ BB36[11].innerHTML = B36; } ;
	if( BB36[12]){ BB36[12].innerHTML = B36; } ;
	if( BB36[13]){ BB36[13].innerHTML = B36; } ;
	if( BB36[14]){ BB36[14].innerHTML = B36; } ;
	if( BB36[15]){ BB36[15].innerHTML = B36; } ;
	if( BB36[16]){ BB36[16].innerHTML = B36; } ;
	if( BB36[17]){ BB36[17].innerHTML = B36; } ;
	if( BB36[18]){ BB36[18].innerHTML = B36; } ;
	if( BB36[19]){ BB36[19].innerHTML = B36; } ;
	if( BB36[20]){ BB36[20].innerHTML = B36; } ;
	
var BB37 = document.getElementsByClassName("Biblio37");
	if( BB37[0]){ BB37[0].innerHTML = B37; } ;
	if( BB37[1]){ BB37[1].innerHTML = B37; } ;
	if( BB37[2]){ BB37[2].innerHTML = B37; } ;
	if( BB37[3]){ BB37[3].innerHTML = B37; } ;
	if( BB37[4]){ BB37[4].innerHTML = B37; } ;
	if( BB37[5]){ BB37[5].innerHTML = B37; } ;
	if( BB37[6]){ BB37[6].innerHTML = B37; } ;
	if( BB37[7]){ BB37[7].innerHTML = B37; } ;
	if( BB37[8]){ BB37[8].innerHTML = B37; } ;
	if( BB37[9]){ BB37[9].innerHTML = B37; } ;
	if( BB37[10]){ BB37[10].innerHTML = B37; } ;
	if( BB37[11]){ BB37[11].innerHTML = B37; } ;
	if( BB37[12]){ BB37[12].innerHTML = B37; } ;
	if( BB37[13]){ BB37[13].innerHTML = B37; } ;
	if( BB37[14]){ BB37[14].innerHTML = B37; } ;
	if( BB37[15]){ BB37[15].innerHTML = B37; } ;
	if( BB37[16]){ BB37[16].innerHTML = B37; } ;
	if( BB37[17]){ BB37[17].innerHTML = B37; } ;
	if( BB37[18]){ BB37[18].innerHTML = B37; } ;
	if( BB37[19]){ BB37[19].innerHTML = B37; } ;
	if( BB37[20]){ BB37[20].innerHTML = B37; } ;
	
var BB38 = document.getElementsByClassName("Biblio38");
	if( BB38[0]){ BB38[0].innerHTML = B38; } ;
	if( BB38[1]){ BB38[1].innerHTML = B38; } ;
	if( BB38[2]){ BB38[2].innerHTML = B38; } ;
	if( BB38[3]){ BB38[3].innerHTML = B38; } ;
	if( BB38[4]){ BB38[4].innerHTML = B38; } ;
	if( BB38[5]){ BB38[5].innerHTML = B38; } ;
	if( BB38[6]){ BB38[6].innerHTML = B38; } ;
	if( BB38[7]){ BB38[7].innerHTML = B38; } ;
	if( BB38[8]){ BB38[8].innerHTML = B38; } ;
	if( BB38[9]){ BB38[9].innerHTML = B38; } ;
	if( BB38[10]){ BB38[10].innerHTML = B38; } ;
	if( BB38[11]){ BB38[11].innerHTML = B38; } ;
	if( BB38[12]){ BB38[12].innerHTML = B38; } ;
	if( BB38[13]){ BB38[13].innerHTML = B38; } ;
	if( BB38[14]){ BB38[14].innerHTML = B38; } ;
	if( BB38[15]){ BB38[15].innerHTML = B38; } ;
	if( BB38[16]){ BB38[16].innerHTML = B38; } ;
	if( BB38[17]){ BB38[17].innerHTML = B38; } ;
	if( BB38[18]){ BB38[18].innerHTML = B38; } ;
	if( BB38[19]){ BB38[19].innerHTML = B38; } ;
	if( BB38[20]){ BB38[20].innerHTML = B38; } ;
	
var BB39 = document.getElementsByClassName("Biblio39");
	if( BB39[0]){ BB39[0].innerHTML = B39; } ;
	if( BB39[1]){ BB39[1].innerHTML = B39; } ;
	if( BB39[2]){ BB39[2].innerHTML = B39; } ;
	if( BB39[3]){ BB39[3].innerHTML = B39; } ;
	if( BB39[4]){ BB39[4].innerHTML = B39; } ;
	if( BB39[5]){ BB39[5].innerHTML = B39; } ;
	if( BB39[6]){ BB39[6].innerHTML = B39; } ;
	if( BB39[7]){ BB39[7].innerHTML = B39; } ;
	if( BB39[8]){ BB39[8].innerHTML = B39; } ;
	if( BB39[9]){ BB39[9].innerHTML = B39; } ;
	if( BB39[10]){ BB39[10].innerHTML = B39; } ;
	if( BB39[11]){ BB39[11].innerHTML = B39; } ;
	if( BB39[12]){ BB39[12].innerHTML = B39; } ;
	if( BB39[13]){ BB39[13].innerHTML = B39; } ;
	if( BB39[14]){ BB39[14].innerHTML = B39; } ;
	if( BB39[15]){ BB39[15].innerHTML = B39; } ;
	if( BB39[16]){ BB39[16].innerHTML = B39; } ;
	if( BB39[17]){ BB39[17].innerHTML = B39; } ;
	if( BB39[18]){ BB39[18].innerHTML = B39; } ;
	if( BB39[19]){ BB39[19].innerHTML = B39; } ;
	if( BB39[20]){ BB39[20].innerHTML = B39; } ;
	
var BB40 = document.getElementsByClassName("Biblio40");
	if( BB40[0]){ BB40[0].innerHTML = B40; } ;
	if( BB40[1]){ BB40[1].innerHTML = B40; } ;
	if( BB40[2]){ BB40[2].innerHTML = B40; } ;
	if( BB40[3]){ BB40[3].innerHTML = B40; } ;
	if( BB40[4]){ BB40[4].innerHTML = B40; } ;
	if( BB40[5]){ BB40[5].innerHTML = B40; } ;
	if( BB40[6]){ BB40[6].innerHTML = B40; } ;
	if( BB40[7]){ BB40[7].innerHTML = B40; } ;
	if( BB40[8]){ BB40[8].innerHTML = B40; } ;
	if( BB40[9]){ BB40[9].innerHTML = B40; } ;
	if( BB40[10]){ BB40[10].innerHTML = B40; } ;
	if( BB40[11]){ BB40[11].innerHTML = B40; } ;
	if( BB40[12]){ BB40[12].innerHTML = B40; } ;
	if( BB40[13]){ BB40[13].innerHTML = B40; } ;
	if( BB40[14]){ BB40[14].innerHTML = B40; } ;
	if( BB40[15]){ BB40[15].innerHTML = B40; } ;
	if( BB40[16]){ BB40[16].innerHTML = B40; } ;
	if( BB40[17]){ BB40[17].innerHTML = B40; } ;
	if( BB40[18]){ BB40[18].innerHTML = B40; } ;
	if( BB40[19]){ BB40[19].innerHTML = B40; } ;
	if( BB40[20]){ BB40[20].innerHTML = B40; } ;

var BB41 = document.getElementsByClassName("Biblio41");
	if( BB41[0]){ BB41[0].innerHTML = B41; } ;
	if( BB41[1]){ BB41[1].innerHTML = B41; } ;
	if( BB41[2]){ BB41[2].innerHTML = B41; } ;
	if( BB41[3]){ BB41[3].innerHTML = B41; } ;
	if( BB41[4]){ BB41[4].innerHTML = B41; } ;
	if( BB41[5]){ BB41[5].innerHTML = B41; } ;
	if( BB41[6]){ BB41[6].innerHTML = B41; } ;
	if( BB41[7]){ BB41[7].innerHTML = B41; } ;
	if( BB41[8]){ BB41[8].innerHTML = B41; } ;
	if( BB41[9]){ BB41[9].innerHTML = B41; } ;
	if( BB41[10]){ BB41[10].innerHTML = B41; } ;
	if( BB41[11]){ BB41[11].innerHTML = B41; } ;
	if( BB41[12]){ BB41[12].innerHTML = B41; } ;
	if( BB41[13]){ BB41[13].innerHTML = B41; } ;
	if( BB41[14]){ BB41[14].innerHTML = B41; } ;
	if( BB41[15]){ BB41[15].innerHTML = B41; } ;
	if( BB41[16]){ BB41[16].innerHTML = B41; } ;
	if( BB41[17]){ BB41[17].innerHTML = B41; } ;
	if( BB41[18]){ BB41[18].innerHTML = B41; } ;
	if( BB41[19]){ BB41[19].innerHTML = B41; } ;
	if( BB41[20]){ BB41[20].innerHTML = B41; } ;

var BB42 = document.getElementsByClassName("Biblio42");
	if( BB42[0]){ BB42[0].innerHTML = B42; } ;
	if( BB42[1]){ BB42[1].innerHTML = B42; } ;
	if( BB42[2]){ BB42[2].innerHTML = B42; } ;
	if( BB42[3]){ BB42[3].innerHTML = B42; } ;
	if( BB42[4]){ BB42[4].innerHTML = B42; } ;
	if( BB42[5]){ BB42[5].innerHTML = B42; } ;
	if( BB42[6]){ BB42[6].innerHTML = B42; } ;
	if( BB42[7]){ BB42[7].innerHTML = B42; } ;
	if( BB42[8]){ BB42[8].innerHTML = B42; } ;
	if( BB42[9]){ BB42[9].innerHTML = B42; } ;
	if( BB42[10]){ BB42[10].innerHTML = B42; } ;
	if( BB42[11]){ BB42[11].innerHTML = B42; } ;
	if( BB42[12]){ BB42[12].innerHTML = B42; } ;
	if( BB42[13]){ BB42[13].innerHTML = B42; } ;
	if( BB42[14]){ BB42[14].innerHTML = B42; } ;
	if( BB42[15]){ BB42[15].innerHTML = B42; } ;
	if( BB42[16]){ BB42[16].innerHTML = B42; } ;
	if( BB42[17]){ BB42[17].innerHTML = B42; } ;
	if( BB42[18]){ BB42[18].innerHTML = B42; } ;
	if( BB42[19]){ BB42[19].innerHTML = B42; } ;
	if( BB42[20]){ BB42[20].innerHTML = B42; } ;

var BB43 = document.getElementsByClassName("Biblio43");
	if( BB43[0]){ BB43[0].innerHTML = B43; } ;
	if( BB43[1]){ BB43[1].innerHTML = B43; } ;
	if( BB43[2]){ BB43[2].innerHTML = B43; } ;
	if( BB43[3]){ BB43[3].innerHTML = B43; } ;
	if( BB43[4]){ BB43[4].innerHTML = B43; } ;
	if( BB43[5]){ BB43[5].innerHTML = B43; } ;
	if( BB43[6]){ BB43[6].innerHTML = B43; } ;
	if( BB43[7]){ BB43[7].innerHTML = B43; } ;
	if( BB43[8]){ BB43[8].innerHTML = B43; } ;
	if( BB43[9]){ BB43[9].innerHTML = B43; } ;
	if( BB43[10]){ BB43[10].innerHTML = B43; } ;
	if( BB43[11]){ BB43[11].innerHTML = B43; } ;
	if( BB43[12]){ BB43[12].innerHTML = B43; } ;
	if( BB43[13]){ BB43[13].innerHTML = B43; } ;
	if( BB43[14]){ BB43[14].innerHTML = B43; } ;
	if( BB43[15]){ BB43[15].innerHTML = B43; } ;
	if( BB43[16]){ BB43[16].innerHTML = B43; } ;
	if( BB43[17]){ BB43[17].innerHTML = B43; } ;
	if( BB43[18]){ BB43[18].innerHTML = B43; } ;
	if( BB43[19]){ BB43[19].innerHTML = B43; } ;
	if( BB43[20]){ BB43[20].innerHTML = B43; } ;

var BB44 = document.getElementsByClassName("Biblio44");
	if( BB44[0]){ BB44[0].innerHTML = B44; } ;
	if( BB44[1]){ BB44[1].innerHTML = B44; } ;
	if( BB44[2]){ BB44[2].innerHTML = B44; } ;
	if( BB44[3]){ BB44[3].innerHTML = B44; } ;
	if( BB44[4]){ BB44[4].innerHTML = B44; } ;
	if( BB44[5]){ BB44[5].innerHTML = B44; } ;
	if( BB44[6]){ BB44[6].innerHTML = B44; } ;
	if( BB44[7]){ BB44[7].innerHTML = B44; } ;
	if( BB44[8]){ BB44[8].innerHTML = B44; } ;
	if( BB44[9]){ BB44[9].innerHTML = B44; } ;
	if( BB44[10]){ BB44[10].innerHTML = B44; } ;
	if( BB44[11]){ BB44[11].innerHTML = B44; } ;
	if( BB44[12]){ BB44[12].innerHTML = B44; } ;
	if( BB44[13]){ BB44[13].innerHTML = B44; } ;
	if( BB44[14]){ BB44[14].innerHTML = B44; } ;
	if( BB44[15]){ BB44[15].innerHTML = B44; } ;
	if( BB44[16]){ BB44[16].innerHTML = B44; } ;
	if( BB44[17]){ BB44[17].innerHTML = B44; } ;
	if( BB44[18]){ BB44[18].innerHTML = B44; } ;
	if( BB44[19]){ BB44[19].innerHTML = B44; } ;
	if( BB44[20]){ BB44[20].innerHTML = B44; } ;

var BB45 = document.getElementsByClassName("Biblio45");
	if( BB45[0]){ BB45[0].innerHTML = B45; } ;
	if( BB45[1]){ BB45[1].innerHTML = B45; } ;
	if( BB45[2]){ BB45[2].innerHTML = B45; } ;
	if( BB45[3]){ BB45[3].innerHTML = B45; } ;
	if( BB45[4]){ BB45[4].innerHTML = B45; } ;
	if( BB45[5]){ BB45[5].innerHTML = B45; } ;
	if( BB45[6]){ BB45[6].innerHTML = B45; } ;
	if( BB45[7]){ BB45[7].innerHTML = B45; } ;
	if( BB45[8]){ BB45[8].innerHTML = B45; } ;
	if( BB45[9]){ BB45[9].innerHTML = B45; } ;
	if( BB45[10]){ BB45[10].innerHTML = B45; } ;
	if( BB45[11]){ BB45[11].innerHTML = B45; } ;
	if( BB45[12]){ BB45[12].innerHTML = B45; } ;
	if( BB45[13]){ BB45[13].innerHTML = B45; } ;
	if( BB45[14]){ BB45[14].innerHTML = B45; } ;
	if( BB45[15]){ BB45[15].innerHTML = B45; } ;
	if( BB45[16]){ BB45[16].innerHTML = B45; } ;
	if( BB45[17]){ BB45[17].innerHTML = B45; } ;
	if( BB45[18]){ BB45[18].innerHTML = B45; } ;
	if( BB45[19]){ BB45[19].innerHTML = B45; } ;
	if( BB45[20]){ BB45[20].innerHTML = B45; } ;
	
var BB46 = document.getElementsByClassName("Biblio46");
	if( BB46[0]){ BB46[0].innerHTML = B46; } ;
	if( BB46[1]){ BB46[1].innerHTML = B46; } ;
	if( BB46[2]){ BB46[2].innerHTML = B46; } ;
	if( BB46[3]){ BB46[3].innerHTML = B46; } ;
	if( BB46[4]){ BB46[4].innerHTML = B46; } ;
	if( BB46[5]){ BB46[5].innerHTML = B46; } ;
	if( BB46[6]){ BB46[6].innerHTML = B46; } ;
	if( BB46[7]){ BB46[7].innerHTML = B46; } ;
	if( BB46[8]){ BB46[8].innerHTML = B46; } ;
	if( BB46[9]){ BB46[9].innerHTML = B46; } ;
	if( BB46[10]){ BB46[10].innerHTML = B46; } ;
	if( BB46[11]){ BB46[11].innerHTML = B46; } ;
	if( BB46[12]){ BB46[12].innerHTML = B46; } ;
	if( BB46[13]){ BB46[13].innerHTML = B46; } ;
	if( BB46[14]){ BB46[14].innerHTML = B46; } ;
	if( BB46[15]){ BB46[15].innerHTML = B46; } ;
	if( BB46[16]){ BB46[16].innerHTML = B46; } ;
	if( BB46[17]){ BB46[17].innerHTML = B46; } ;
	if( BB46[18]){ BB46[18].innerHTML = B46; } ;
	if( BB46[19]){ BB46[19].innerHTML = B46; } ;
	if( BB46[20]){ BB46[20].innerHTML = B46; } ;

var BB47 = document.getElementsByClassName("Biblio47");
	if( BB47[0]){ BB47[0].innerHTML = B47; } ;
	if( BB47[1]){ BB47[1].innerHTML = B47; } ;
	if( BB47[2]){ BB47[2].innerHTML = B47; } ;
	if( BB47[3]){ BB47[3].innerHTML = B47; } ;
	if( BB47[4]){ BB47[4].innerHTML = B47; } ;
	if( BB47[5]){ BB47[5].innerHTML = B47; } ;
	if( BB47[6]){ BB47[6].innerHTML = B47; } ;
	if( BB47[7]){ BB47[7].innerHTML = B47; } ;
	if( BB47[8]){ BB47[8].innerHTML = B47; } ;
	if( BB47[9]){ BB47[9].innerHTML = B47; } ;
	if( BB47[10]){ BB47[10].innerHTML = B47; } ;
	if( BB47[11]){ BB47[11].innerHTML = B47; } ;
	if( BB47[12]){ BB47[12].innerHTML = B47; } ;
	if( BB47[13]){ BB47[13].innerHTML = B47; } ;
	if( BB47[14]){ BB47[14].innerHTML = B47; } ;
	if( BB47[15]){ BB47[15].innerHTML = B47; } ;
	if( BB47[16]){ BB47[16].innerHTML = B47; } ;
	if( BB47[17]){ BB47[17].innerHTML = B47; } ;
	if( BB47[18]){ BB47[18].innerHTML = B47; } ;
	if( BB47[19]){ BB47[19].innerHTML = B47; } ;
	if( BB47[20]){ BB47[20].innerHTML = B47; } ;

var BB48 = document.getElementsByClassName("Biblio48");
	if( BB48[0]){ BB48[0].innerHTML = B48; } ;
	if( BB48[1]){ BB48[1].innerHTML = B48; } ;
	if( BB48[2]){ BB48[2].innerHTML = B48; } ;
	if( BB48[3]){ BB48[3].innerHTML = B48; } ;
	if( BB48[4]){ BB48[4].innerHTML = B48; } ;
	if( BB48[5]){ BB48[5].innerHTML = B48; } ;
	if( BB48[6]){ BB48[6].innerHTML = B48; } ;
	if( BB48[7]){ BB48[7].innerHTML = B48; } ;
	if( BB48[8]){ BB48[8].innerHTML = B48; } ;
	if( BB48[9]){ BB48[9].innerHTML = B48; } ;
	if( BB48[10]){ BB48[10].innerHTML = B48; } ;
	if( BB48[11]){ BB48[11].innerHTML = B48; } ;
	if( BB48[12]){ BB48[12].innerHTML = B48; } ;
	if( BB48[13]){ BB48[13].innerHTML = B48; } ;
	if( BB48[14]){ BB48[14].innerHTML = B48; } ;
	if( BB48[15]){ BB48[15].innerHTML = B48; } ;
	if( BB48[16]){ BB48[16].innerHTML = B48; } ;
	if( BB48[17]){ BB48[17].innerHTML = B48; } ;
	if( BB48[18]){ BB48[18].innerHTML = B48; } ;
	if( BB48[19]){ BB48[19].innerHTML = B48; } ;
	if( BB48[20]){ BB48[20].innerHTML = B48; } ;

var BB49 = document.getElementsByClassName("Biblio49");
	if( BB49[0]){ BB49[0].innerHTML = B49; } ;
	if( BB49[1]){ BB49[1].innerHTML = B49; } ;
	if( BB49[2]){ BB49[2].innerHTML = B49; } ;
	if( BB49[3]){ BB49[3].innerHTML = B49; } ;
	if( BB49[4]){ BB49[4].innerHTML = B49; } ;
	if( BB49[5]){ BB49[5].innerHTML = B49; } ;
	if( BB49[6]){ BB49[6].innerHTML = B49; } ;
	if( BB49[7]){ BB49[7].innerHTML = B49; } ;
	if( BB49[8]){ BB49[8].innerHTML = B49; } ;
	if( BB49[9]){ BB49[9].innerHTML = B49; } ;
	if( BB49[10]){ BB49[10].innerHTML = B49; } ;
	if( BB49[11]){ BB49[11].innerHTML = B49; } ;
	if( BB49[12]){ BB49[12].innerHTML = B49; } ;
	if( BB49[13]){ BB49[13].innerHTML = B49; } ;
	if( BB49[14]){ BB49[14].innerHTML = B49; } ;
	if( BB49[15]){ BB49[15].innerHTML = B49; } ;
	if( BB49[16]){ BB49[16].innerHTML = B49; } ;
	if( BB49[17]){ BB49[17].innerHTML = B49; } ;
	if( BB49[18]){ BB49[18].innerHTML = B49; } ;
	if( BB49[19]){ BB49[19].innerHTML = B49; } ;
	if( BB49[20]){ BB49[20].innerHTML = B49; } ;

var BB50 = document.getElementsByClassName("Biblio50");
	if( BB50[0]){ BB50[0].innerHTML = B50; } ;
	if( BB50[1]){ BB50[1].innerHTML = B50; } ;
	if( BB50[2]){ BB50[2].innerHTML = B50; } ;
	if( BB50[3]){ BB50[3].innerHTML = B50; } ;
	if( BB50[4]){ BB50[4].innerHTML = B50; } ;
	if( BB50[5]){ BB50[5].innerHTML = B50; } ;
	if( BB50[6]){ BB50[6].innerHTML = B50; } ;
	if( BB50[7]){ BB50[7].innerHTML = B50; } ;
	if( BB50[8]){ BB50[8].innerHTML = B50; } ;
	if( BB50[9]){ BB50[9].innerHTML = B50; } ;
	if( BB50[10]){ BB50[10].innerHTML = B50; } ;
	if( BB50[11]){ BB50[11].innerHTML = B50; } ;
	if( BB50[12]){ BB50[12].innerHTML = B50; } ;
	if( BB50[13]){ BB50[13].innerHTML = B50; } ;
	if( BB50[14]){ BB50[14].innerHTML = B50; } ;
	if( BB50[15]){ BB50[15].innerHTML = B50; } ;
	if( BB50[16]){ BB50[16].innerHTML = B50; } ;
	if( BB50[17]){ BB50[17].innerHTML = B50; } ;
	if( BB50[18]){ BB50[18].innerHTML = B50; } ;
	if( BB50[19]){ BB50[19].innerHTML = B50; } ;
	if( BB50[20]){ BB50[20].innerHTML = B50; } ;

var BB51 = document.getElementsByClassName("Biblio51");
	if( BB51[0]){ BB51[0].innerHTML = B51; } ;
	if( BB51[1]){ BB51[1].innerHTML = B51; } ;
	if( BB51[2]){ BB51[2].innerHTML = B51; } ;
	if( BB51[3]){ BB51[3].innerHTML = B51; } ;
	if( BB51[4]){ BB51[4].innerHTML = B51; } ;
	if( BB51[5]){ BB51[5].innerHTML = B51; } ;
	if( BB51[6]){ BB51[6].innerHTML = B51; } ;
	if( BB51[7]){ BB51[7].innerHTML = B51; } ;
	if( BB51[8]){ BB51[8].innerHTML = B51; } ;
	if( BB51[9]){ BB51[9].innerHTML = B51; } ;
	if( BB51[10]){ BB51[10].innerHTML = B51; } ;
	if( BB51[11]){ BB51[11].innerHTML = B51; } ;
	if( BB51[12]){ BB51[12].innerHTML = B51; } ;
	if( BB51[13]){ BB51[13].innerHTML = B51; } ;
	if( BB51[14]){ BB51[14].innerHTML = B51; } ;
	if( BB51[15]){ BB51[15].innerHTML = B51; } ;
	if( BB51[16]){ BB51[16].innerHTML = B51; } ;
	if( BB51[17]){ BB51[17].innerHTML = B51; } ;
	if( BB51[18]){ BB51[18].innerHTML = B51; } ;
	if( BB51[19]){ BB51[19].innerHTML = B51; } ;
	if( BB51[20]){ BB51[20].innerHTML = B51; } ;

var BB52 = document.getElementsByClassName("Biblio52");
	if( BB52[0]){ BB52[0].innerHTML = B52; } ;
	if( BB52[1]){ BB52[1].innerHTML = B52; } ;
	if( BB52[2]){ BB52[2].innerHTML = B52; } ;
	if( BB52[3]){ BB52[3].innerHTML = B52; } ;
	if( BB52[4]){ BB52[4].innerHTML = B52; } ;
	if( BB52[5]){ BB52[5].innerHTML = B52; } ;
	if( BB52[6]){ BB52[6].innerHTML = B52; } ;
	if( BB52[7]){ BB52[7].innerHTML = B52; } ;
	if( BB52[8]){ BB52[8].innerHTML = B52; } ;
	if( BB52[9]){ BB52[9].innerHTML = B52; } ;
	if( BB52[10]){ BB52[10].innerHTML = B52; } ;
	if( BB52[11]){ BB52[11].innerHTML = B52; } ;
	if( BB52[12]){ BB52[12].innerHTML = B52; } ;
	if( BB52[13]){ BB52[13].innerHTML = B52; } ;
	if( BB52[14]){ BB52[14].innerHTML = B52; } ;
	if( BB52[15]){ BB52[15].innerHTML = B52; } ;
	if( BB52[16]){ BB52[16].innerHTML = B52; } ;
	if( BB52[17]){ BB52[17].innerHTML = B52; } ;
	if( BB52[18]){ BB52[18].innerHTML = B52; } ;
	if( BB52[19]){ BB52[19].innerHTML = B52; } ;
	if( BB52[20]){ BB52[20].innerHTML = B52; } ;
	
var BB53 = document.getElementsByClassName("Biblio53");
	if( BB53[0]){ BB53[0].innerHTML = B53; } ;
	if( BB53[1]){ BB53[1].innerHTML = B53; } ;
	if( BB53[2]){ BB53[2].innerHTML = B53; } ;
	if( BB53[3]){ BB53[3].innerHTML = B53; } ;
	if( BB53[4]){ BB53[4].innerHTML = B53; } ;
	if( BB53[5]){ BB53[5].innerHTML = B53; } ;
	if( BB53[6]){ BB53[6].innerHTML = B53; } ;
	if( BB53[7]){ BB53[7].innerHTML = B53; } ;
	if( BB53[8]){ BB53[8].innerHTML = B53; } ;
	if( BB53[9]){ BB53[9].innerHTML = B53; } ;
	if( BB53[10]){ BB53[10].innerHTML = B53; } ;
	if( BB53[11]){ BB53[11].innerHTML = B53; } ;
	if( BB53[12]){ BB53[12].innerHTML = B53; } ;
	if( BB53[13]){ BB53[13].innerHTML = B53; } ;
	if( BB53[14]){ BB53[14].innerHTML = B53; } ;
	if( BB53[15]){ BB53[15].innerHTML = B53; } ;
	if( BB53[16]){ BB53[16].innerHTML = B53; } ;
	if( BB53[17]){ BB53[17].innerHTML = B53; } ;
	if( BB53[18]){ BB53[18].innerHTML = B53; } ;
	if( BB53[19]){ BB53[19].innerHTML = B53; } ;
	if( BB53[20]){ BB53[20].innerHTML = B53; } ;

var BB54 = document.getElementsByClassName("Biblio54");
	if( BB54[0]){ BB54[0].innerHTML = B54; } ;
	if( BB54[1]){ BB54[1].innerHTML = B54; } ;
	if( BB54[2]){ BB54[2].innerHTML = B54; } ;
	if( BB54[3]){ BB54[3].innerHTML = B54; } ;
	if( BB54[4]){ BB54[4].innerHTML = B54; } ;
	if( BB54[5]){ BB54[5].innerHTML = B54; } ;
	if( BB54[6]){ BB54[6].innerHTML = B54; } ;
	if( BB54[7]){ BB54[7].innerHTML = B54; } ;
	if( BB54[8]){ BB54[8].innerHTML = B54; } ;
	if( BB54[9]){ BB54[9].innerHTML = B54; } ;
	if( BB54[10]){ BB54[10].innerHTML = B54; } ;
	if( BB54[11]){ BB54[11].innerHTML = B54; } ;
	if( BB54[12]){ BB54[12].innerHTML = B54; } ;
	if( BB54[13]){ BB54[13].innerHTML = B54; } ;
	if( BB54[14]){ BB54[14].innerHTML = B54; } ;
	if( BB54[15]){ BB54[15].innerHTML = B54; } ;
	if( BB54[16]){ BB54[16].innerHTML = B54; } ;
	if( BB54[17]){ BB54[17].innerHTML = B54; } ;
	if( BB54[18]){ BB54[18].innerHTML = B54; } ;
	if( BB54[19]){ BB54[19].innerHTML = B54; } ;
	if( BB54[20]){ BB54[20].innerHTML = B54; } ;
	
var BB55 = document.getElementsByClassName("Biblio55");
	if( BB55[0]){ BB55[0].innerHTML = B55; } ;
	if( BB55[1]){ BB55[1].innerHTML = B55; } ;
	if( BB55[2]){ BB55[2].innerHTML = B55; } ;
	if( BB55[3]){ BB55[3].innerHTML = B55; } ;
	if( BB55[4]){ BB55[4].innerHTML = B55; } ;
	if( BB55[5]){ BB55[5].innerHTML = B55; } ;
	if( BB55[6]){ BB55[6].innerHTML = B55; } ;
	if( BB55[7]){ BB55[7].innerHTML = B55; } ;
	if( BB55[8]){ BB55[8].innerHTML = B55; } ;
	if( BB55[9]){ BB55[9].innerHTML = B55; } ;
	if( BB55[10]){ BB55[10].innerHTML = B55; } ;
	if( BB55[11]){ BB55[11].innerHTML = B55; } ;
	if( BB55[12]){ BB55[12].innerHTML = B55; } ;
	if( BB55[13]){ BB55[13].innerHTML = B55; } ;
	if( BB55[14]){ BB55[14].innerHTML = B55; } ;
	if( BB55[15]){ BB55[15].innerHTML = B55; } ;
	if( BB55[16]){ BB55[16].innerHTML = B55; } ;
	if( BB55[17]){ BB55[17].innerHTML = B55; } ;
	if( BB55[18]){ BB55[18].innerHTML = B55; } ;
	if( BB55[19]){ BB55[19].innerHTML = B55; } ;
	if( BB55[20]){ BB55[20].innerHTML = B55; } ;
	
var BB56 = document.getElementsByClassName("Biblio56");
	if( BB56[0]){ BB56[0].innerHTML = B56; } ;
	if( BB56[1]){ BB56[1].innerHTML = B56; } ;
	if( BB56[2]){ BB56[2].innerHTML = B56; } ;
	if( BB56[3]){ BB56[3].innerHTML = B56; } ;
	if( BB56[4]){ BB56[4].innerHTML = B56; } ;
	if( BB56[5]){ BB56[5].innerHTML = B56; } ;
	if( BB56[6]){ BB56[6].innerHTML = B56; } ;
	if( BB56[7]){ BB56[7].innerHTML = B56; } ;
	if( BB56[8]){ BB56[8].innerHTML = B56; } ;
	if( BB56[9]){ BB56[9].innerHTML = B56; } ;
	if( BB56[10]){ BB56[10].innerHTML = B56; } ;
	if( BB56[11]){ BB56[11].innerHTML = B56; } ;
	if( BB56[12]){ BB56[12].innerHTML = B56; } ;
	if( BB56[13]){ BB56[13].innerHTML = B56; } ;
	if( BB56[14]){ BB56[14].innerHTML = B56; } ;
	if( BB56[15]){ BB56[15].innerHTML = B56; } ;
	if( BB56[16]){ BB56[16].innerHTML = B56; } ;
	if( BB56[17]){ BB56[17].innerHTML = B56; } ;
	if( BB56[18]){ BB56[18].innerHTML = B56; } ;
	if( BB56[19]){ BB56[19].innerHTML = B56; } ;
	if( BB56[20]){ BB56[20].innerHTML = B56; } ;
	
var BB57 = document.getElementsByClassName("Biblio57");
	if( BB57[0]){ BB57[0].innerHTML = B57; } ;
	if( BB57[1]){ BB57[1].innerHTML = B57; } ;
	if( BB57[2]){ BB57[2].innerHTML = B57; } ;
	if( BB57[3]){ BB57[3].innerHTML = B57; } ;
	if( BB57[4]){ BB57[4].innerHTML = B57; } ;
	if( BB57[5]){ BB57[5].innerHTML = B57; } ;
	if( BB57[6]){ BB57[6].innerHTML = B57; } ;
	if( BB57[7]){ BB57[7].innerHTML = B57; } ;
	if( BB57[8]){ BB57[8].innerHTML = B57; } ;
	if( BB57[9]){ BB57[9].innerHTML = B57; } ;
	if( BB57[10]){ BB57[10].innerHTML = B57; } ;
	if( BB57[11]){ BB57[11].innerHTML = B57; } ;
	if( BB57[12]){ BB57[12].innerHTML = B57; } ;
	if( BB57[13]){ BB57[13].innerHTML = B57; } ;
	if( BB57[14]){ BB57[14].innerHTML = B57; } ;
	if( BB57[15]){ BB57[15].innerHTML = B57; } ;
	if( BB57[16]){ BB57[16].innerHTML = B57; } ;
	if( BB57[17]){ BB57[17].innerHTML = B57; } ;
	if( BB57[18]){ BB57[18].innerHTML = B57; } ;
	if( BB57[19]){ BB57[19].innerHTML = B57; } ;
	if( BB57[20]){ BB57[20].innerHTML = B57; } ;
		
var BB58 = document.getElementsByClassName("Biblio58");
	if( BB58[0]){ BB58[0].innerHTML = B58; } ;
	if( BB58[1]){ BB58[1].innerHTML = B58; } ;
	if( BB58[2]){ BB58[2].innerHTML = B58; } ;
	if( BB58[3]){ BB58[3].innerHTML = B58; } ;
	if( BB58[4]){ BB58[4].innerHTML = B58; } ;
	if( BB58[5]){ BB58[5].innerHTML = B58; } ;
	if( BB58[6]){ BB58[6].innerHTML = B58; } ;
	if( BB58[7]){ BB58[7].innerHTML = B58; } ;
	if( BB58[8]){ BB58[8].innerHTML = B58; } ;
	if( BB58[9]){ BB58[9].innerHTML = B58; } ;
	if( BB58[10]){ BB58[10].innerHTML = B58; } ;
	if( BB58[11]){ BB58[11].innerHTML = B58; } ;
	if( BB58[12]){ BB58[12].innerHTML = B58; } ;
	if( BB58[13]){ BB58[13].innerHTML = B58; } ;
	if( BB58[14]){ BB58[14].innerHTML = B58; } ;
	if( BB58[15]){ BB58[15].innerHTML = B58; } ;
	if( BB58[16]){ BB58[16].innerHTML = B58; } ;
	if( BB58[17]){ BB58[17].innerHTML = B58; } ;
	if( BB58[18]){ BB58[18].innerHTML = B58; } ;
	if( BB58[19]){ BB58[19].innerHTML = B58; } ;
	if( BB58[20]){ BB58[20].innerHTML = B58; } ;

var BB59 = document.getElementsByClassName("Biblio59");
	if( BB59[0]){ BB59[0].innerHTML = B59; } ;
	if( BB59[1]){ BB59[1].innerHTML = B59; } ;
	if( BB59[2]){ BB59[2].innerHTML = B59; } ;
	if( BB59[3]){ BB59[3].innerHTML = B59; } ;
	if( BB59[4]){ BB59[4].innerHTML = B59; } ;
	if( BB59[5]){ BB59[5].innerHTML = B59; } ;
	if( BB59[6]){ BB59[6].innerHTML = B59; } ;
	if( BB59[7]){ BB59[7].innerHTML = B59; } ;
	if( BB59[8]){ BB59[8].innerHTML = B59; } ;
	if( BB59[9]){ BB59[9].innerHTML = B59; } ;
	if( BB59[10]){ BB59[10].innerHTML = B59; } ;
	if( BB59[11]){ BB59[11].innerHTML = B59; } ;
	if( BB59[12]){ BB59[12].innerHTML = B59; } ;
	if( BB59[13]){ BB59[13].innerHTML = B59; } ;
	if( BB59[14]){ BB59[14].innerHTML = B59; } ;
	if( BB59[15]){ BB59[15].innerHTML = B59; } ;
	if( BB59[16]){ BB59[16].innerHTML = B59; } ;
	if( BB59[17]){ BB59[17].innerHTML = B59; } ;
	if( BB59[18]){ BB59[18].innerHTML = B59; } ;
	if( BB59[19]){ BB59[19].innerHTML = B59; } ;
	if( BB59[20]){ BB59[20].innerHTML = B59; } ;
	
var BB60 = document.getElementsByClassName("Biblio60");
	if( BB60[0]){ BB60[0].innerHTML = B60; } ;
	if( BB60[1]){ BB60[1].innerHTML = B60; } ;
	if( BB60[2]){ BB60[2].innerHTML = B60; } ;
	if( BB60[3]){ BB60[3].innerHTML = B60; } ;
	if( BB60[4]){ BB60[4].innerHTML = B60; } ;
	if( BB60[5]){ BB60[5].innerHTML = B60; } ;
	if( BB60[6]){ BB60[6].innerHTML = B60; } ;
	if( BB60[7]){ BB60[7].innerHTML = B60; } ;
	if( BB60[8]){ BB60[8].innerHTML = B60; } ;
	if( BB60[9]){ BB60[9].innerHTML = B60; } ;
	if( BB60[10]){ BB60[10].innerHTML = B60; } ;
	if( BB60[11]){ BB60[11].innerHTML = B60; } ;
	if( BB60[12]){ BB60[12].innerHTML = B60; } ;
	if( BB60[13]){ BB60[13].innerHTML = B60; } ;
	if( BB60[14]){ BB60[14].innerHTML = B60; } ;
	if( BB60[15]){ BB60[15].innerHTML = B60; } ;
	if( BB60[16]){ BB60[16].innerHTML = B60; } ;
	if( BB60[17]){ BB60[17].innerHTML = B60; } ;
	if( BB60[18]){ BB60[18].innerHTML = B60; } ;
	if( BB60[19]){ BB60[19].innerHTML = B60; } ;
	if( BB60[20]){ BB60[20].innerHTML = B60; } ;
		
var BB61 = document.getElementsByClassName("Biblio61");
	if( BB61[0]){ BB61[0].innerHTML = B61; } ;
	if( BB61[1]){ BB61[1].innerHTML = B61; } ;
	if( BB61[2]){ BB61[2].innerHTML = B61; } ;
	if( BB61[3]){ BB61[3].innerHTML = B61; } ;
	if( BB61[4]){ BB61[4].innerHTML = B61; } ;
	if( BB61[5]){ BB61[5].innerHTML = B61; } ;
	if( BB61[6]){ BB61[6].innerHTML = B61; } ;
	if( BB61[7]){ BB61[7].innerHTML = B61; } ;
	if( BB61[8]){ BB61[8].innerHTML = B61; } ;
	if( BB61[9]){ BB61[9].innerHTML = B61; } ;
	if( BB61[10]){ BB61[10].innerHTML = B61; } ;
	if( BB61[11]){ BB61[11].innerHTML = B61; } ;
	if( BB61[12]){ BB61[12].innerHTML = B61; } ;
	if( BB61[13]){ BB61[13].innerHTML = B61; } ;
	if( BB61[14]){ BB61[14].innerHTML = B61; } ;
	if( BB61[15]){ BB61[15].innerHTML = B61; } ;
	if( BB61[16]){ BB61[16].innerHTML = B61; } ;
	if( BB61[17]){ BB61[17].innerHTML = B61; } ;
	if( BB61[18]){ BB61[18].innerHTML = B61; } ;
	if( BB61[19]){ BB61[19].innerHTML = B61; } ;
	if( BB61[20]){ BB61[20].innerHTML = B61; } ;

var BB62 = document.getElementsByClassName("Biblio62");
	if( BB62[0]){ BB62[0].innerHTML = B62; } ;
	if( BB62[1]){ BB62[1].innerHTML = B62; } ;
	if( BB62[2]){ BB62[2].innerHTML = B62; } ;
	if( BB62[3]){ BB62[3].innerHTML = B62; } ;
	if( BB62[4]){ BB62[4].innerHTML = B62; } ;
	if( BB62[5]){ BB62[5].innerHTML = B62; } ;
	if( BB62[6]){ BB62[6].innerHTML = B62; } ;
	if( BB62[7]){ BB62[7].innerHTML = B62; } ;
	if( BB62[8]){ BB62[8].innerHTML = B62; } ;
	if( BB62[9]){ BB62[9].innerHTML = B62; } ;
	if( BB62[10]){ BB62[10].innerHTML = B62; } ;
	if( BB62[11]){ BB62[11].innerHTML = B62; } ;
	if( BB62[12]){ BB62[12].innerHTML = B62; } ;
	if( BB62[13]){ BB62[13].innerHTML = B62; } ;
	if( BB62[14]){ BB62[14].innerHTML = B62; } ;
	if( BB62[15]){ BB62[15].innerHTML = B62; } ;
	if( BB62[16]){ BB62[16].innerHTML = B62; } ;
	if( BB62[17]){ BB62[17].innerHTML = B62; } ;
	if( BB62[18]){ BB62[18].innerHTML = B62; } ;
	if( BB62[19]){ BB62[19].innerHTML = B62; } ;
	if( BB62[20]){ BB62[20].innerHTML = B62; } ;
	
var BB63 = document.getElementsByClassName("Biblio63");
	if( BB63[0]){ BB63[0].innerHTML = B63; } ;
	if( BB63[1]){ BB63[1].innerHTML = B63; } ;
	if( BB63[2]){ BB63[2].innerHTML = B63; } ;
	if( BB63[3]){ BB63[3].innerHTML = B63; } ;
	if( BB63[4]){ BB63[4].innerHTML = B63; } ;
	if( BB63[5]){ BB63[5].innerHTML = B63; } ;
	if( BB63[6]){ BB63[6].innerHTML = B63; } ;
	if( BB63[7]){ BB63[7].innerHTML = B63; } ;
	if( BB63[8]){ BB63[8].innerHTML = B63; } ;
	if( BB63[9]){ BB63[9].innerHTML = B63; } ;
	if( BB63[10]){ BB63[10].innerHTML = B63; } ;
	if( BB63[11]){ BB63[11].innerHTML = B63; } ;
	if( BB63[12]){ BB63[12].innerHTML = B63; } ;
	if( BB63[13]){ BB63[13].innerHTML = B63; } ;
	if( BB63[14]){ BB63[14].innerHTML = B63; } ;
	if( BB63[15]){ BB63[15].innerHTML = B63; } ;
	if( BB63[16]){ BB63[16].innerHTML = B63; } ;
	if( BB63[17]){ BB63[17].innerHTML = B63; } ;
	if( BB63[18]){ BB63[18].innerHTML = B63; } ;
	if( BB63[19]){ BB63[19].innerHTML = B63; } ;
	if( BB63[20]){ BB63[20].innerHTML = B63; } ;

var BB64 = document.getElementsByClassName("Biblio64");
	if( BB64[0]){ BB64[0].innerHTML = B64; } ;
	if( BB64[1]){ BB64[1].innerHTML = B64; } ;
	if( BB64[2]){ BB64[2].innerHTML = B64; } ;
	if( BB64[3]){ BB64[3].innerHTML = B64; } ;
	if( BB64[4]){ BB64[4].innerHTML = B64; } ;
	if( BB64[5]){ BB64[5].innerHTML = B64; } ;
	if( BB64[6]){ BB64[6].innerHTML = B64; } ;
	if( BB64[7]){ BB64[7].innerHTML = B64; } ;
	if( BB64[8]){ BB64[8].innerHTML = B64; } ;
	if( BB64[9]){ BB64[9].innerHTML = B64; } ;
	if( BB64[10]){ BB64[10].innerHTML = B64; } ;
	if( BB64[11]){ BB64[11].innerHTML = B64; } ;
	if( BB64[12]){ BB64[12].innerHTML = B64; } ;
	if( BB64[13]){ BB64[13].innerHTML = B64; } ;
	if( BB64[14]){ BB64[14].innerHTML = B64; } ;
	if( BB64[15]){ BB64[15].innerHTML = B64; } ;
	if( BB64[16]){ BB64[16].innerHTML = B64; } ;
	if( BB64[17]){ BB64[17].innerHTML = B64; } ;
	if( BB64[18]){ BB64[18].innerHTML = B64; } ;
	if( BB64[19]){ BB64[19].innerHTML = B64; } ;
	if( BB64[20]){ BB64[20].innerHTML = B64; } ;
	
var BB65 = document.getElementsByClassName("Biblio65");
	if( BB65[0]){ BB65[0].innerHTML = B65; } ;
	if( BB65[1]){ BB65[1].innerHTML = B65; } ;
	if( BB65[2]){ BB65[2].innerHTML = B65; } ;
	if( BB65[3]){ BB65[3].innerHTML = B65; } ;
	if( BB65[4]){ BB65[4].innerHTML = B65; } ;
	if( BB65[5]){ BB65[5].innerHTML = B65; } ;
	if( BB65[6]){ BB65[6].innerHTML = B65; } ;
	if( BB65[7]){ BB65[7].innerHTML = B65; } ;
	if( BB65[8]){ BB65[8].innerHTML = B65; } ;
	if( BB65[9]){ BB65[9].innerHTML = B65; } ;
	if( BB65[10]){ BB65[10].innerHTML = B65; } ;
	if( BB65[11]){ BB65[11].innerHTML = B65; } ;
	if( BB65[12]){ BB65[12].innerHTML = B65; } ;
	if( BB65[13]){ BB65[13].innerHTML = B65; } ;
	if( BB65[14]){ BB65[14].innerHTML = B65; } ;
	if( BB65[15]){ BB65[15].innerHTML = B65; } ;
	if( BB65[16]){ BB65[16].innerHTML = B65; } ;
	if( BB65[17]){ BB65[17].innerHTML = B65; } ;
	if( BB65[18]){ BB65[18].innerHTML = B65; } ;
	if( BB65[19]){ BB65[19].innerHTML = B65; } ;
	if( BB65[20]){ BB65[20].innerHTML = B65; } ;
	
var BB66 = document.getElementsByClassName("Biblio66");
	if( BB66[0]){ BB66[0].innerHTML = B66; } ;
	if( BB66[1]){ BB66[1].innerHTML = B66; } ;
	if( BB66[2]){ BB66[2].innerHTML = B66; } ;
	if( BB66[3]){ BB66[3].innerHTML = B66; } ;
	if( BB66[4]){ BB66[4].innerHTML = B66; } ;
	if( BB66[5]){ BB66[5].innerHTML = B66; } ;
	if( BB66[6]){ BB66[6].innerHTML = B66; } ;
	if( BB66[7]){ BB66[7].innerHTML = B66; } ;
	if( BB66[8]){ BB66[8].innerHTML = B66; } ;
	if( BB66[9]){ BB66[9].innerHTML = B66; } ;
	if( BB66[10]){ BB66[10].innerHTML = B66; } ;
	if( BB66[11]){ BB66[11].innerHTML = B66; } ;
	if( BB66[12]){ BB66[12].innerHTML = B66; } ;
	if( BB66[13]){ BB66[13].innerHTML = B66; } ;
	if( BB66[14]){ BB66[14].innerHTML = B66; } ;
	if( BB66[15]){ BB66[15].innerHTML = B66; } ;
	if( BB66[16]){ BB66[16].innerHTML = B66; } ;
	if( BB66[17]){ BB66[17].innerHTML = B66; } ;
	if( BB66[18]){ BB66[18].innerHTML = B66; } ;
	if( BB66[19]){ BB66[19].innerHTML = B66; } ;
	if( BB66[20]){ BB66[20].innerHTML = B66; } ;
	
var BB67 = document.getElementsByClassName("Biblio67");
	if( BB67[0]){ BB67[0].innerHTML = B67; } ;
	if( BB67[1]){ BB67[1].innerHTML = B67; } ;
	if( BB67[2]){ BB67[2].innerHTML = B67; } ;
	if( BB67[3]){ BB67[3].innerHTML = B67; } ;
	if( BB67[4]){ BB67[4].innerHTML = B67; } ;
	if( BB67[5]){ BB67[5].innerHTML = B67; } ;
	if( BB67[6]){ BB67[6].innerHTML = B67; } ;
	if( BB67[7]){ BB67[7].innerHTML = B67; } ;
	if( BB67[8]){ BB67[8].innerHTML = B67; } ;
	if( BB67[9]){ BB67[9].innerHTML = B67; } ;
	if( BB67[10]){ BB67[10].innerHTML = B67; } ;
	if( BB67[11]){ BB67[11].innerHTML = B67; } ;
	if( BB67[12]){ BB67[12].innerHTML = B67; } ;
	if( BB67[13]){ BB67[13].innerHTML = B67; } ;
	if( BB67[14]){ BB67[14].innerHTML = B67; } ;
	if( BB67[15]){ BB67[15].innerHTML = B67; } ;
	if( BB67[16]){ BB67[16].innerHTML = B67; } ;
	if( BB67[17]){ BB67[17].innerHTML = B67; } ;
	if( BB67[18]){ BB67[18].innerHTML = B67; } ;
	if( BB67[19]){ BB67[19].innerHTML = B67; } ;
	if( BB67[20]){ BB67[20].innerHTML = B67; } ;
		
var BB68 = document.getElementsByClassName("Biblio68");
	if( BB68[0]){ BB68[0].innerHTML = B68; } ;
	if( BB68[1]){ BB68[1].innerHTML = B68; } ;
	if( BB68[2]){ BB68[2].innerHTML = B68; } ;
	if( BB68[3]){ BB68[3].innerHTML = B68; } ;
	if( BB68[4]){ BB68[4].innerHTML = B68; } ;
	if( BB68[5]){ BB68[5].innerHTML = B68; } ;
	if( BB68[6]){ BB68[6].innerHTML = B68; } ;
	if( BB68[7]){ BB68[7].innerHTML = B68; } ;
	if( BB68[8]){ BB68[8].innerHTML = B68; } ;
	if( BB68[9]){ BB68[9].innerHTML = B68; } ;
	if( BB68[10]){ BB68[10].innerHTML = B68; } ;
	if( BB68[11]){ BB68[11].innerHTML = B68; } ;
	if( BB68[12]){ BB68[12].innerHTML = B68; } ;
	if( BB68[13]){ BB68[13].innerHTML = B68; } ;
	if( BB68[14]){ BB68[14].innerHTML = B68; } ;
	if( BB68[15]){ BB68[15].innerHTML = B68; } ;
	if( BB68[16]){ BB68[16].innerHTML = B68; } ;
	if( BB68[17]){ BB68[17].innerHTML = B68; } ;
	if( BB68[18]){ BB68[18].innerHTML = B68; } ;
	if( BB68[19]){ BB68[19].innerHTML = B68; } ;
	if( BB68[20]){ BB68[20].innerHTML = B68; } ;

var BB69 = document.getElementsByClassName("Biblio69");
	if( BB69[0]){ BB69[0].innerHTML = B69; } ;
	if( BB69[1]){ BB69[1].innerHTML = B69; } ;
	if( BB69[2]){ BB69[2].innerHTML = B69; } ;
	if( BB69[3]){ BB69[3].innerHTML = B69; } ;
	if( BB69[4]){ BB69[4].innerHTML = B69; } ;
	if( BB69[5]){ BB69[5].innerHTML = B69; } ;
	if( BB69[6]){ BB69[6].innerHTML = B69; } ;
	if( BB69[7]){ BB69[7].innerHTML = B69; } ;
	if( BB69[8]){ BB69[8].innerHTML = B69; } ;
	if( BB69[9]){ BB69[9].innerHTML = B69; } ;
	if( BB69[10]){ BB69[10].innerHTML = B69; } ;
	if( BB69[11]){ BB69[11].innerHTML = B69; } ;
	if( BB69[12]){ BB69[12].innerHTML = B69; } ;
	if( BB69[13]){ BB69[13].innerHTML = B69; } ;
	if( BB69[14]){ BB69[14].innerHTML = B69; } ;
	if( BB69[15]){ BB69[15].innerHTML = B69; } ;
	if( BB69[16]){ BB69[16].innerHTML = B69; } ;
	if( BB69[17]){ BB69[17].innerHTML = B69; } ;
	if( BB69[18]){ BB69[18].innerHTML = B69; } ;
	if( BB69[19]){ BB69[19].innerHTML = B69; } ;
	if( BB69[20]){ BB69[20].innerHTML = B69; } ;

var BB70 = document.getElementsByClassName("Biblio70");
	if( BB70[0]){ BB70[0].innerHTML = B70; } ;
	if( BB70[1]){ BB70[1].innerHTML = B70; } ;
	if( BB70[2]){ BB70[2].innerHTML = B70; } ;
	if( BB70[3]){ BB70[3].innerHTML = B70; } ;
	if( BB70[4]){ BB70[4].innerHTML = B70; } ;
	if( BB70[5]){ BB70[5].innerHTML = B70; } ;
	if( BB70[6]){ BB70[6].innerHTML = B70; } ;
	if( BB70[7]){ BB70[7].innerHTML = B70; } ;
	if( BB70[8]){ BB70[8].innerHTML = B70; } ;
	if( BB70[9]){ BB70[9].innerHTML = B70; } ;
	if( BB70[10]){ BB70[10].innerHTML = B70; } ;
	if( BB70[11]){ BB70[11].innerHTML = B70; } ;
	if( BB70[12]){ BB70[12].innerHTML = B70; } ;
	if( BB70[13]){ BB70[13].innerHTML = B70; } ;
	if( BB70[14]){ BB70[14].innerHTML = B70; } ;
	if( BB70[15]){ BB70[15].innerHTML = B70; } ;
	if( BB70[16]){ BB70[16].innerHTML = B70; } ;
	if( BB70[17]){ BB70[17].innerHTML = B70; } ;
	if( BB70[18]){ BB70[18].innerHTML = B70; } ;
	if( BB70[19]){ BB70[19].innerHTML = B70; } ;
	if( BB70[20]){ BB70[20].innerHTML = B70; } ;	
/*Duplicar  para cada una de las referencias cambiar BB1 a BB2 y B1 a B2 */	


 /* ---------------------- REFERENCIAS BIBLIOGRÁFICAS - TERMINA ---------------------- */


