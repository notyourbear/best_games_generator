const homePageTemplate = (obj = {}) => {
  const title = obj.title || 'Not Polygon';
  const number = obj.number || 50;

  return ` <div class='form-container'>
      <div class="background-logo"></div>
      <form class='form create-best-games'>
        <input id='title-input' type='text' name='title' value='${title}' autofocus>
        <div>
          <span> The </span>
          <input id='amount-input' type='number' name='amount' value=${number}>
          <span> best games of all time</span>
        </div>
        <span> After weeks of voting and arguments, we’re ready to present our choices </span>
        <input id='submit-input' type='submit' name='submit' value='View Now'>
     </form>
     </div>`;
}


export default homePageTemplate;
