<template>
  <div class="wrapper">
    <button @click="btnClick">按钮</button>

    <div @click="divClick">嘎嘎嘎</div>

    <ul class="content">
      <li>嘿嘿1</li>
      <li>嘿嘿2</li>
      <li>嘿嘿3</li>
      <li>嘿嘿4</li>
      <li>嘿嘿5</li>
      <li>嘿嘿6</li>
      <li>嘿嘿7</li>
      <li>嘿嘿8</li>
      <li>嘿嘿9</li>
      <li>嘿嘿10</li>
      <li>嘿嘿11</li>
      <li>嘿嘿12</li>
      <li>嘿嘿13</li>
      <li>嘿嘿14</li>
      <li>嘿嘿15</li>
      <li>嘿嘿16</li>
      <li>嘿嘿17</li>
      <li>嘿嘿18</li>
      <li>嘿嘿19</li>
      <li>嘿嘿20</li>
      <li>嘿嘿21</li>
      <li>嘿嘿22</li>
      <li>嘿嘿23</li>
      <li>嘿嘿24</li>
      <li>嘿嘿25</li>
      <li>嘿嘿26</li>
      <li>嘿嘿27</li>
      <li>嘿嘿28</li>
      <li>嘿嘿29</li>
      <li>嘿嘿30</li>
      <li>嘿嘿31</li>
      <li>嘿嘿32</li>
      <li>嘿嘿33</li>
      <li>嘿嘿34</li>
      <li>嘿嘿35</li>
      <li>嘿嘿36</li>
      <li>嘿嘿37</li>
      <li>嘿嘿38</li>
      <li>嘿嘿39</li>
      <li>嘿嘿40</li>
      <li>嘿嘿41</li>
      <li>嘿嘿42</li>
      <li>嘿嘿43</li>
      <li>嘿嘿44</li>
      <li>嘿嘿45</li>
      <li>嘿嘿46</li>
      <li>嘿嘿47</li>
      <li>嘿嘿48</li>
      <li>嘿嘿49</li>
      <li>嘿嘿50</li>
      <li>嘿嘿51</li>
      <li>嘿嘿52</li>
      <li>嘿嘿53</li>
      <li>嘿嘿54</li>
      <li>嘿嘿55</li>
      <li>嘿嘿56</li>
      <li>嘿嘿57</li>
      <li>嘿嘿58</li>
      <li>嘿嘿59</li>
      <li>嘿嘿60</li>
      <li>嘿嘿61</li>
      <li>嘿嘿62</li>
      <li>嘿嘿63</li>
      <li>嘿嘿64</li>
      <li>嘿嘿65</li>
      <li>嘿嘿66</li>
      <li>嘿嘿67</li>
      <li>嘿嘿68</li>
      <li>嘿嘿69</li>
      <li>嘿嘿70</li>
      <li>嘿嘿71</li>
      <li>嘿嘿72</li>
      <li>嘿嘿73</li>
      <li>嘿嘿74</li>
      <li>嘿嘿75</li>
      <li>嘿嘿76</li>
      <li>嘿嘿77</li>
      <li>嘿嘿78</li>
      <li>嘿嘿79</li>
      <li>嘿嘿80</li>
      <li>嘿嘿81</li>
      <li>嘿嘿82</li>
      <li>嘿嘿83</li>
      <li>嘿嘿84</li>
      <li>嘿嘿85</li>
      <li>嘿嘿86</li>
      <li>嘿嘿87</li>
      <li>嘿嘿88</li>
      <li>嘿嘿89</li>
      <li>嘿嘿90</li>
      <li>嘿嘿91</li>
      <li>嘿嘿92</li>
      <li>嘿嘿93</li>
      <li>嘿嘿94</li>
      <li>嘿嘿95</li>
      <li>嘿嘿96</li>
      <li>嘿嘿97</li>
      <li>嘿嘿98</li>
      <li>嘿嘿99</li>
      <li>嘿嘿100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll= new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true,
    })

    this.scroll.on('scroll',(position) => {
      console.log(position);
    })

    this.scroll.on('pullingUp', () => {
      console.log('加载更多');
    })
  },
  methods:{
    btnClick(){
      console.log('btnClick');
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
