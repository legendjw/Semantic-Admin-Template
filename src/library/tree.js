/**
 * 树形结构帮助方法
 */
export default class Tree {
  /**
   * 转换列表数据为树形结构
   *
   * @param {array} list - 要转换的列表数组
   * @param {object} listArgs - 含有与列表相关信息的对象，可用key值如下
   *
   *   - id 列表项标示id的Key，默认为`id`
   *   - parentId 列表项父级标示的Key，默认为`parent_id`
   *   - topValue 列表项顶级项的主键值，默认为空字符串
   *
   * ```javascript
   * [
   *   {
   *     id: 1,
   *     parent_id: ''
   *   },
   *   {
   *     id: 2,
   *     parent_id: ''
   *   },
   *   {
   *     id: 3,
   *     parent_id: 2
   *   }
   * ]
   *
   * 转换为
   *
   * [
   *   {
   *     id: 1,
   *     parent_id: ''
   *   },
   *   {
   *     id: 2,
   *     parent_id: '',
   *     childs: [
   *       {
   *         id: 3,
   *         parent_id: 2
   *       }
   *     ]
   *   }
   * ]
   *
   * ```
   */
  static listToTree(list, listArgs = {}) {
    let id = listArgs.id ? listArgs.id : 'id'
    let parentId = listArgs.parentId ? listArgs.parentId : 'parent_id'
    let topValue = listArgs.hasOwnProperty('topValue') ? listArgs.topValue : ''
    let tree = []
    let treeIndexHash = {}

    list.forEach(item => {
      let copyItem = Object.assign({}, item)
      if (item[parentId] === topValue) {
        let treeLength = tree.push(copyItem)
        treeIndexHash[item[id]] = treeLength - 1
      }
      else if (treeIndexHash.hasOwnProperty(item[parentId])) {
        let parentItem = tree[treeIndexHash[item[parentId]]]
        if (!parentItem.childs) {
          parentItem.childs = []
        }
        parentItem.childs.push(copyItem)
      }
    })

    return tree
  }
}
