function skillsMember() {
  const member = document.querySelector('.member');
  const memberInner = document.querySelector('.member__inner');
  const memberItems = document.querySelectorAll('.member__item');
  const memberItemTitles = document.querySelectorAll('.member__item-title');
  const memberItemContents = document.querySelectorAll('.member__item-content');

  const memberItemContentsHeight = [];
  let memberItemContentsHeightMax = 0;

  memberItems.forEach((item, index) => {
    memberItemContentsHeight.push(memberItemContents[index].offsetHeight);
    memberItemContents[index].style.height = 0;
  });

  memberItemContentsHeightMax = Math.max(...memberItemContentsHeight);

  function memberOpen() {
    memberItemTitles.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (memberItems[index].classList.contains('is-open')) {
          memberItems[index].classList.remove('is-open');
          memberItemContents[index].style.height = 0;
        } else {
          memberItems.forEach((item) => {
            item.classList.remove('is-open');
          });
          memberItemContents.forEach((item) => {
            item.style.height = 0;
          });
          memberItems[index].classList.add('is-open');
          memberItemContents[index].style.height = `${memberItemContentsHeightMax}px`;
        }
      });
    });
  }

  function memberClose() {
    memberInner.addEventListener('click', (e) => {
      if (e.target.classList.contains('member__item')) {
        return;
      }
      memberItems.forEach((item) => {
        item.classList.remove('is-open');
      });
      memberItemContents.forEach((item) => {
        item.style.height = 0;
      });
    });
  }

  memberOpen();
  memberClose();
} 