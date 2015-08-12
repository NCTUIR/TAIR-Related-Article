# TAIR-Related-Article
提供 DSpace 版本機構典藏於 TAIR 之關聯文章

# jQuery版本說明

### 使用方法

1. 於文章頁面中（display-item.jsp）新增一 id 為 related-article 的 div 區塊

  `<div id="related-article"></div>`
2. 載入 related-article.js

  `<script src="related-article.js"></script>`
3. 完成！

### 格式修改
1. ul 與 li 標籤均以加入對應的 related-list 以及 related-list-item 的類別，可依照需求自行設計 CSS 與外觀

### 注意事項
1. 使用此版本將只提供使用者相關文章，並不會增加網路大學評分之 Backlink 數目。


# JSP版本說明


 1. 下載本專案提供之 c.tld 檔案，並放置於 WEB-INF 資料夾中
 2. 修改 WEB-INF 資料夾中之 web.xml 檔案，於檔案 `<jsp-config>` 區塊中增加以下語法：

    ```sh
    <taglib>
        <taglib-uri>http://java.sun.com/jstl/core</taglib-uri>
        <taglib-location>/WEB-INF/c.tld</taglib-location>
    </taglib>
  ```
 3. 修改網頁目錄中之 display-item.jsp 檔案，分別增加以下語法

    * 於程式前段適當位置加入以下語法：
    
        ```sh
        <%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
        <%@ page import="org.dspace.content.DCValue" %>
        ```
        ```sh
        DCValue[] titleValue = item.getDC("title", null, Item.ANY);
        String targetTitle = "";
        if (titleValue.length != 0)
    	{
			targetTitle = titleValue[0].value;
		}
        request.setAttribute("targetTitle", targetTitle);
        ```
        
    * 於欲顯示關聯文章處加入以下語法：
    
        ```sh
        <div id="related-dspace-content">
    		<c:import url="http://ir.nctu.edu.tw/related_article/">
				<c:param name="targetTitle" value="${targetTitle}" />
			</c:import>
		</div>
        ```
 4. 重新啟動 Tomcat
 5. 效果測試：https://ir.nctu.edu.tw/handle/11536/25297
