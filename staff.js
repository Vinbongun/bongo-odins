if (isFollowUser) {
  // try {
  //   //Слушатель: нажимает ок на диологовом окне "Добавить пользователя?"
  //   page.on('dialog', async dialog => {
  //     await dialog.accept();
  //   });

  //   //Нажимает на кнопку "Добавить как лучшего пользователя"
  //   await Promise.all([
  //     await page.click('.add_remove_best_member')
  //   ]);
  //   console.log(`Пользователь добавленн в список лучших пользователей`)
  // } catch (error) {
  // }

  //Нажимает на кнопку "Подписаться"
  await Promise.all([await page.click(".frw_btn")]);
  console.log(`Подписались на пользователя`);
}

// const [inputMessage] = await page.$x(
//   "//button[contains(., 'Введите текст')]"
// );
// if (inputMessage) {
//   await inputMessage.click();
// }

{
  //Ищет пользователя и отправляет ему сообшение

  // await page.$eval(
  //   "input[name=displayName]",
  //   (el) => (el.value = "Adenosine triphosphate")
  // );

  await page.click("input[name=displayName]"); //Кликает на поле ввода username
  await page.type("input[name=displayName]", username, { delay: 20 }); // Вводит username пользователя
  page.keyboard.press("Enter"); //Жмем enter

  // await Promise.all([await page.click(".bmf_icon_wrp")]);
  await page.waitForTimeout(1000);

  //Нажимает на кнопку "Отправить сообщение"
  const [button] = await page.$x(
    "//button[contains(., 'Отправить сообщение')]"
  );

  if (button) {
    await button.click();
  }

  //Определяем в какое окно писать сообщение
  $(".float_window").each((idx, elem) => {
    const messageWindowTitle = $(elem).find(".imfd_title").text();
    console.log(messageWindowTitle);
  });

  //Вводим сообщение
  await page.waitForTimeout(1000);
  // await page.waitForSelector("textarea[name=reply]");
  await page.type("textarea[name=reply]", sendText, { delay: 20 }); // Вводит username пользователя
  page.keyboard.press("Enter"); //Жмем enter

  const [button] = await page.$x("//input[contains(@class, 'bmsb_input')]");
  if (button) {
    await button.click();
  }
}
